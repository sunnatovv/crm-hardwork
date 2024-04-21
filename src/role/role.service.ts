import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    return this.roleRepo.save(createRoleDto);
  }

  findAll() {
    return this.roleRepo.find();
  }

  findOne(id: number) {
    return this.roleRepo.findBy({ id });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepo.update({ id }, updateRoleDto);
  }

  remove(id: number) {
    return this.roleRepo.delete({ id });
  }
}
