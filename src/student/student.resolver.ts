import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentInput } from './student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private lessonService: StudentService) {}

  //   @Query((returns) => LessonType)
  //   lesson(@Args('id') id: string) {
  //     return this.lessonService.getLessonById(id);
  //   }

  //   @Query((returns) => [LessonType])
  //   allLessons() {
  //     return this.lessonService.getAllLessons();
  //   }

  @Mutation((returns) => StudentType)
  createStudent(@Args('studentInput') studentInput: StudentInput) {
    return this.lessonService.createStudent(studentInput);
  }
}
