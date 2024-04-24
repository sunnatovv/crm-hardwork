import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lesson } from '../../lesson/entities/lesson.entity';
import { Student } from '../../students/entities/student.entity';


@Entity()
export class StudentLesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  is_there: boolean;

  @Column()
  reason: string;

  @Column()
  be_paid: boolean;

  @ManyToOne(() => Lesson, (lesson) => lesson.student_lessons)
  lesson_id: Lesson;

  @ManyToOne(() => Student, (student) => student.student_lessons)
  student_id: Student;
}
