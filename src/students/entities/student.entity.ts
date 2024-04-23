import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Payment } from '../../payment/entities/payment.entity';
import { StudentGroup } from '../../student-group/entities/student-group.entity';
import { StudentLesson } from '../../student-lesson/entities/student-lesson.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => StudentGroup, (x) => x.student_id)
  student_group_id: StudentGroup[];

  @OneToMany(() => StudentLesson, (x) => x.student_id)
  student_lesson_id: StudentLesson[];

  @OneToMany(() => Payment, (x) => x.student_id)
  payment_id: Payment[];

  @Column()
  lid_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  birthday: Date;
  @Column()
  male: string;
}
