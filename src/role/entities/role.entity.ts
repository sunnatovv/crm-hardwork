import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Stuff } from '../../stuff/entities/stuff.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Stuff, (stuff) => stuff.roles)
  stuffs: Stuff[];
}
