import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findById(id: string): Promise<Task> {
    const record = await this.prisma.task.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Task> {
    return this.findById(id);
  }

  create(dto: CreateTaskDto): Promise<Task> {
    const data: Task = { ...dto };

    return this.prisma.task.create({ data });
  }

  async update(id: string, dto: UpdateTaskDto): Promise<Task> {
    await this.findById(id);

    const data: Partial<Task> = { ...dto };

    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {

    await this.findById(id)
    
    await this.prisma.task.delete({ where: { id } });
  }
}
