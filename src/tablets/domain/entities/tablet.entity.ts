import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class TabletEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   marca: string;

   @Column()
   modelo: string;

   @Column()
   mpgx: number;

   @Column()
   tam: string;
}