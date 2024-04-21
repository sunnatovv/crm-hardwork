import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StuffRole } from '../../stuff_role/entities/stuff_role.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => StuffRole, (stuff) => stuff.role_id)
  role_id: StuffRole;
}
