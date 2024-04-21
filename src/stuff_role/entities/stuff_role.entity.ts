import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { Stuff } from '../../stuff/entities/stuff.entity';

@Entity()
export class StuffRole {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Stuff, (RoleStatus) => RoleStatus.stuff_role)
  stuff_id: Stuff;

  @OneToMany(() => Role, (RoleStatus) => RoleStatus.role_id)
  role_id: Role;
}
