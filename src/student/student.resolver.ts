import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentInput } from './student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  async student(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Query((returns) => [StudentType])
  async allStudents() {
    return this.studentService.getAllStudents();
  }

  @Mutation((returns) => StudentType)
  async createStudent(@Args('studentInput') studentInput: StudentInput) {
    return this.studentService.createStudent(studentInput);
  }
}
