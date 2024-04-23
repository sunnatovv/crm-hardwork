import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  group_name: Object;

  lesson_start_time: string;
  lesson_continuous: string;
  lesson_week_day: string;

  //   group_stage_id;

  room_number: number;
  room_floor: number;

  // branch_id

  lessons_quant: number;
  is_active: boolean;
}
