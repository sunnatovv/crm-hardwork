import { Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentLesson } from './entities/student_lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentLessonService {
  constructor(
    @InjectRepository(StudentLesson)
    private readonly studentLessonRepo: Repository<StudentLesson>,
  ) {}

  async create(createStudentLessonDto: CreateStudentLessonDto) {
    return this.studentLessonRepo.save(createStudentLessonDto);
  }

  async findAll() {
    return this.studentLessonRepo.find({
      relations: { lesson_id: true, student_id: true },
    });
  }

  async findOne(id: number) {
    return this.studentLessonRepo.findOneBy({ id });
  }

  async update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    await this.studentLessonRepo.update({ id }, updateStudentLessonDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.studentLessonRepo.delete({ id });
    return {
      message: 'successfully removed',
    };
  }
}
