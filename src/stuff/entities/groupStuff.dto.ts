import { Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Stuff } from '../../stuff/entities/stuff.entity';
import { Group } from '../../group/entities/group.entity';

@Entity()
export class GroupStuff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Stuff, (stuff) => stuff.groups)
  @JoinColumn({ name: 'groupId' })
  stuff: Stuff;

  @ManyToOne(() => Group, (role) => role.stuffs)
  @JoinColumn({ name: 'roleId' })
  group: Group;
}
