import { Injectable } from '@nestjs/common';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReasonLidService {
  constructor(
    @InjectRepository(ReasonLid)
    private readonly resLidRepo: Repository<ReasonLid>,
  ) {}
  create(createReasonLidDto: CreateReasonLidDto) {
    return this.resLidRepo.save(createReasonLidDto);
  }

  findAll() {
    return this.resLidRepo.find();
  }

  findOne(id: number) {
    return this.resLidRepo.findBy({ id });
  }

  update(id: number, updateReasonLidDto: UpdateReasonLidDto) {
    return this.resLidRepo.update({ id }, updateReasonLidDto);
  }

  remove(id: number) {
    return this.resLidRepo.delete({ id });
  }
}
