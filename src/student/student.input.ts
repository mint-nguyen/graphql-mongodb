import { MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StudentInput {
  @MinLength(1)
  @Field()
  firstName: string;

  @MinLength(1)
  @Field()
  lastName: string;
}
