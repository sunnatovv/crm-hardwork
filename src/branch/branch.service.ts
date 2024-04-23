import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './entities/branch.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch) private readonly branchRepo: Repository<Branch>,
  ) {}
  create(createBranchDto: CreateBranchDto) {
    return this.branchRepo.save(createBranchDto);
  }

  findAll() {
    return this.branchRepo.find();
  }

  findOne(id: number) {
    return this.branchRepo.findOne({ where: { id } });
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.branchRepo.update({ id }, updateBranchDto);
  }

  remove(id: number) {
    return this.branchRepo.delete({ id });
  }
}
