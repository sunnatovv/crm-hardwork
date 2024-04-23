import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  lid_id?: number;

  first_name?: string;

  last_name?: string;

  phone_number?: string;

  birthday?: Date;

  male?: string;
}
