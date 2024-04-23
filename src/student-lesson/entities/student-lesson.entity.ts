import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Lesson } from '../../lesson/entities/lesson.entity';
import { Student } from '../../students/entities/student.entity';

@Entity()
export class StudentLesson {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Lesson, (x) => x.student_lesson)
  lesson_id: Lesson;

  @ManyToOne(()=>Student,x=>x.student_lesson_id)
  student_id:Student

  @Column()
  is_there:boolean
  
  @Column()
  reason:string

  @Column()
  be_paid:boolean
}
