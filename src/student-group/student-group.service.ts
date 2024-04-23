import { Injectable } from '@nestjs/common';
import { CreateStudentGroupDto } from './dto/create-student-group.dto';
import { UpdateStudentGroupDto } from './dto/update-student-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentGroup } from './entities/student-group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentGroupService {
  constructor(
    @InjectRepository(StudentGroup)
    private readonly studentGrRepo: Repository<StudentGroup>,
  ) {}
  create(createStudentGroupDto: CreateStudentGroupDto) {
    return this.studentGrRepo.save(createStudentGroupDto);
  }

  findAll() {
    return this.studentGrRepo.find();
  }

  findOne(id: number) {
    return this.studentGrRepo.findOne({ where: { id } });
  }

  update(id: number, updateStudentGroupDto: UpdateStudentGroupDto) {
    return this.studentGrRepo.update({ id }, updateStudentGroupDto);
  }

  remove(id: number) {
    return this.studentGrRepo.delete({ id });
  }
}
