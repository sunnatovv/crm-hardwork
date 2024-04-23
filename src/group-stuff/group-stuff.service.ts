import { Injectable } from '@nestjs/common';
import { CreateGroupStuffDto } from './dto/create-group-stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group-stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupStuff } from './entities/group-stuff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupStuffService {
  constructor(
    @InjectRepository(GroupStuff)
    private readonly grStuffRepo: Repository<GroupStuff>,
  ) {}
  create(createGroupStuffDto: CreateGroupStuffDto) {
    return this.grStuffRepo.save(createGroupStuffDto);
  }

  findAll() {
    return this.grStuffRepo.find();
  }

  findOne(id: number) {
    return this.grStuffRepo.findOne({ where: { id } });
  }

  update(id: number, updateGroupStuffDto: UpdateGroupStuffDto) {
    return this.grStuffRepo.update({ id }, updateGroupStuffDto);
  }

  remove(id: number) {
    return this.grStuffRepo.delete({ id });
  }
}
