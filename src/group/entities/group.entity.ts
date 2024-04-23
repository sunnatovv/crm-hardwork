import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lesson } from '../../lesson/entities/lesson.entity';
import { Stage } from '../../stage/entities/stage.entity';
import { GroupStuff } from '../../group-stuff/entities/group-stuff.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => GroupStuff, (x) => x.group_id)
  group: GroupStuff;

  @OneToMany(() => Lesson, (x) => x.group_id)
  group_name: Lesson;

  @Column()
  lesson_start_time: string;
  @Column()
  lesson_continuous: string;
  @Column()
  lesson_week_day: string;

  @ManyToOne(() => Stage, (x) => x.stages)
  group_stage_id: Stage;

  @Column()
  room_number: number;
  @Column()
  room_floor: number;

  // branch_id

  @Column()
  lessons_quant: number;
  @Column()
  is_active: boolean;
}
