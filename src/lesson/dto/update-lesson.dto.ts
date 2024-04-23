import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
  lesson_theme: string;
  lesson_number: number;
  group_id: Object;
  lesson_date: Date;
}
