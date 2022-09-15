import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@ObjectType('Lesson')
export class AssignStudentType {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
