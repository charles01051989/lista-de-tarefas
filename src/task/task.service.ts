import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {


    const data: Prisma.TaskCreateInput = {

      content: createTaskDto.content,
      name: createTaskDto.content,

      user: {
        connect: {
          id: createTaskDto.userId,
        },
      },
      type: {
        connect: {
          id: createTaskDto.typeId,
        },
      },
    };

    return this.prisma.task.create({ data }).catch(handleError)
  }
  findAll() {
    return this.prisma.task.findMany({
      select: {
        name: true,
        type: {
          select: {
            name: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        type: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
