import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private readonly groupRepo: Repository<Group>,
  ) {}
  create(createGroupDto: CreateGroupDto) {
    return this.groupRepo.save(createGroupDto);
  }

  findAll() {
    return this.groupRepo.find();
  }

  findOne(id: number) {
    return this.groupRepo.findOne({ where: { id } });
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.groupRepo.update({ id }, updateGroupDto);
  }

  remove(id: number) {
    return this.groupRepo.delete({ id });
  }
}
