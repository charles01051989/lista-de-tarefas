import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @ApiProperty({
    description: 'O nome da tarefa',
    example: ' Fazer teste...'
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: 'Tipo da tarefa',
    example: ' Urgente...'
  })
  type: string;
  @IsString()
  @ApiProperty({
    description: 'Conteúdo da tarefa',
    example: 'Detalhamento...'
  })
  content: string;
}
