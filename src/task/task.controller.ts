import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService){}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }
}
