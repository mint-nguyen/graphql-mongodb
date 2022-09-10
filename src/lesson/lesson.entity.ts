import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
