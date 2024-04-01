import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64})
  name: string;

  @Column()
  quantity: number

  @Column()
  category: string
}
