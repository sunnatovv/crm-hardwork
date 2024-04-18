import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidService {
  constructor(
    @InjectRepository(Lid) private readonly lidRepo: Repository<Lid>,
  ) {}
  create(createLidDto: CreateLidDto) {
    return this.lidRepo.save(createLidDto);
  }

  findAll() {
    return this.lidRepo.find();
  }

  findOne(id: number) {
    return this.lidRepo.findBy({ id });
  }

  update(id: number, updateLidDto: UpdateLidDto) {
    return this.lidRepo.update({ id }, updateLidDto);
  }

  remove(id: number) {
    return this.lidRepo.delete({ id });
  }
}
