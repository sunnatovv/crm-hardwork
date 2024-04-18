import { Column } from "typeorm";

export class CreateLidDto {
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  target_id: Object;

  @Column()
  lid_stage_id: Object;

  @Column()
  test_date: string;

  @Column()
  trial_lesson_date: string;

  @Column()
  trial_lesson_time: string;

  @Column()
  trial_lesson_group_id: string;

  @Column()
  lid_status_id: Object;

  @Column()
  cancel_reson_id: Object;
}
