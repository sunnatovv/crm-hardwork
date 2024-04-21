import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StuffRole } from '../../stuff_role/entities/stuff_role.entity';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

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
