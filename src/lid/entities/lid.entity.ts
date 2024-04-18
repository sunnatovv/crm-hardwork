import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LidStatus } from '../../lid_status/entities/lid_status.entity';

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  target_id: string;

  @Column()
  lid_stage_id: string;

  @Column()
  test_date: string;

  @Column()
  trial_lesson_date: string;

  @Column()
  trial_lesson_time: string;

  @Column()
  trial_lesson_group_id: string;

  @ManyToOne(() => LidStatus, (lid) => lid.lids)
  lid_status_id: LidStatus;

  @Column()
  cancel_reson_id: string;
}
