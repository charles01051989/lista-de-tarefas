import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  findOne(id: string): Promise<Task> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  create(dto: CreateTaskDto): Promise<Task> {
    const data: Task = { ...dto };

    return this.prisma.task.create({ data });
  }

  update(id: string, dto: UpdateTaskDto): Promise<Task> {
    const data: Partial<Task> = { ...dto };
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }
}
