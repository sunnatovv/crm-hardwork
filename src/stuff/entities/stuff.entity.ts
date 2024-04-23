import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StuffRole } from '../../stuff_role/entities/stuff_role.entity';
import { GroupStuff } from '../../group-stuff/entities/group-stuff.entity';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => GroupStuff, (x) => x.stuff_id)
  stuff: GroupStuff;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  is_active: string;

  @ManyToOne(() => StuffRole, (stuff) => stuff.stuff_id)
  stuff_role: StuffRole;
}
