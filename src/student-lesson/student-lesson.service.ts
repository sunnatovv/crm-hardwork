import { Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student-lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student-lesson.dto';

@Injectable()
export class StudentLessonService {
  create(createStudentLessonDto: CreateStudentLessonDto) {
    return 'This action adds a new studentLesson';
  }

  findAll() {
    return `This action returns all studentLesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentLesson`;
  }

  update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    return `This action updates a #${id} studentLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentLesson`;
  }
}
