import { Injectable } from '@nestjs/common';
import { CreateTargetDto } from './dto/create-target_id.dto';
import { UpdateTargetDto } from './dto/update-target_id.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Target } from './entities/target_id.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TargetService {
  constructor(
    @InjectRepository(Target) private readonly targetRepo: Repository<Target>,
  ) {}

  create(createTargetDto: CreateTargetDto) {
    return this.targetRepo.save(createTargetDto);
  }

  findAll() {
    return this.targetRepo.find({
      relations: {
        lids: true,
      },
    });
  }

  findOne(id: number) {
    return this.targetRepo.findOneBy({ id });
  }

  update(id: number, updateTargetDto: UpdateTargetDto) {
    return this.targetRepo.update({ id }, updateTargetDto);
  }

  remove(id: number) {
    return this.targetRepo.delete({ id });
  }
}
