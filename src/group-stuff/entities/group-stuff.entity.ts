import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "../../group/entities/group.entity";
import { Stuff } from "../../stuff/entities/stuff.entity";

@Entity()
export class GroupStuff {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Group,x=>x.group)
    group_id:Group

    @ManyToOne(()=>Stuff,x=>x.stuff)
    stuff_id:Stuff
}
