import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';
import { Group } from '../../group/entities/group.entity';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn()
  id: number;


  @OneToMany(() => Group, (x) => x.group_stage_id)
  stages: Group[];

  @Column()
  name: string;

  @OneToMany(() => Lid, (lid) => lid.lid_stage_id)
  lids: Lid[];
}
