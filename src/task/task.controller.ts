import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('task')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um pedido',
  })
  create(@Body() createTaskDto: CreateTaskDto ){
    return this.taskService.create(createTaskDto)
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os pedidos',
  })
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um pedido pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }
}
