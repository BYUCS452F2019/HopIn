import { Hippo } from './Hippo'
import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, Column } from "typeorm";

@Entity()
export class Hat extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    color: string;

    @ManyToOne(type => Hippo, hippo => hippo.hats)
    owner: Hippo;
}