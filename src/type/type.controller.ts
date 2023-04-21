import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'; 
import { AuthGuard } from '@nestjs/passport';

@ApiTags('type')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um tipo',
  })
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os tipos',
  })
  findAll() {
    return this.typeService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um tipo pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.typeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um tipo pelo ID',
  })
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(id, updateTypeDto);
  }

  @Delete(':id')

  @ApiOperation({
    summary: 'Remover um tipo pelo ID',
  })
  delete(@Param('id') id: string) {
    this.typeService.delete(id);
  }
}
