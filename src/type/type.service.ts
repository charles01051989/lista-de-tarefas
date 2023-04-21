import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './entities/type.entity';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class TypeService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Type[]> {
    return this.prisma.type.findMany()
  }

  async findById(id: string): Promise<Type> {
    const record = await this.prisma.type.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Type> {
    return this.findById(id);
  }

  create(dto: CreateTypeDto): Promise<Type> {
    const data: Type = { ...dto };

    return this.prisma.type.create({ data });
  }

  async update(id: string, dto: UpdateTypeDto): Promise<Type> {
    await this.findById(id);

    const data: Partial<Type> = { ...dto };

    return this.prisma.type.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.type.delete({ where: { id } });
  }
}
