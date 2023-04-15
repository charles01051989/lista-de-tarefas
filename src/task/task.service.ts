import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  tasks: Task[]
  findAll() {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto) {
    const task: Task = { id: 'random_id', ...createTaskDto };

    this.tasks.push(task);

    return task;
  }
}
