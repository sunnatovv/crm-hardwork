import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudentLesson } from '../../student_lesson/entities/student_lesson.entity';
import { Group } from '../../group/entities/group.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lesson_theme: string;

  @Column()
  lesson_number: number;

  @ManyToOne(() => Group, (group) => group.lessons)
  group_id: Group;

  @Column()
  lesson_date: Date;

  @OneToMany(() => StudentLesson, (student_les) => student_les.lesson_id)
  student_lessons: StudentLesson[];
}
