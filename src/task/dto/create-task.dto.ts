import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateTaskDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o pedido',
    example: '9a4f1259-9dfd-49d6-a235-8f8c71e010ff',
  })
  userId: string;


  @ApiProperty({
    description: 'Id do tipo de tarefa',
    example: '58cef40c-3697-4676-9581-ccd810d84a7b'
  })
  typeId: string;


  @ApiProperty({
    description: 'O nome da tarefa',
    example: 'Fazer teste',
  })
  name: string;


  @ApiProperty({
    description: 'Conteúdo da tarefa',
    example: 'Detalhamento',
  })
  content: string;
}
