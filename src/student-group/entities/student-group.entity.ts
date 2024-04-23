import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../../students/entities/student.entity';
import { Group } from '../../group/entities/group.entity';

@Entity()
export class StudentGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (x) => x.student_group_id)
  student_id: Student;

  @ManyToOne(() => Group, (x) => x.group)
  group_id: Group;
}
