export class CreateLidDto {
  first_name: string;
  last_name: string;
  phone_number: string;
  target_id: Object;
  lid_stage_id: Object; 
  test_date: Date;
  trial_lesson: Date;
  trial_lesson_date: number;
  trial_lesson_time: string;
  trial_lesson_group_id: number;
  lid_status_id: Object;
  cancel_reason_id: Object;
}
