import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from '../../group/entities/group.entity';
import { StudentLesson } from '../../student-lesson/entities/student-lesson.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => StudentLesson, (x) => x.lesson_id)
  student_lesson: StudentLesson;
  @Column()
  lesson_theme: string;
  @Column()
  lesson_number: number;
  @ManyToOne(() => Group, (x) => x.group_name)
  group_id: Group;
  @Column()
  lesson_date: Date;
}
