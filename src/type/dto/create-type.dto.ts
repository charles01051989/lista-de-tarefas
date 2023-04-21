import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateTypeDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do tipo de tarefa',
    example: 'Urgente'
  })
  name: string;
}
