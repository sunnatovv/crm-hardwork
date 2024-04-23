import { Module } from '@nestjs/common';
import { StudentLessonService } from './student-lesson.service';
import { StudentLessonController } from './student-lesson.controller';

@Module({
  controllers: [StudentLessonController],
  providers: [StudentLessonService],
})
export class StudentLessonModule {}
