import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class ReasonLid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  reason_lid: string;

  @OneToMany(() => Lid, (lid) => lid.cancel_reason_id)
  lids: Lid[];
}
