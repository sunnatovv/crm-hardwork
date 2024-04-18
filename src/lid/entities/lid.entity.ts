import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LidStatus } from '../../lid_status/entities/lid_status.entity';
import { ReasonLid } from '../../reason_lid/entities/reason_lid.entity';
import { Target } from '../../target/entities/target.entity';
import { Stage } from '../../stage/entities/stage.entity';

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

  @ManyToOne(() => Target, (target) => target.lids)
  target_id: Target;

  @ManyToOne(() => Stage, (lidStage) => lidStage.lids)
  lid_stage_id: Stage;

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

  // @Column()
  // cancel_reson_id: string;
  @ManyToOne(() => ReasonLid, (reasonLid) => reasonLid.lids)
  cancel_reason_id: ReasonLid;
}
