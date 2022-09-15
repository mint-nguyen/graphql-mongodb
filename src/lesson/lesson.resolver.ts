import { AssignStudentType } from './assign-student.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  async lesson(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Query((returns) => [LessonType])
  async allLessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation((returns) => LessonType)
  async createLesson(@Args('lessonInput') lessonInput: CreateLessonInput) {
    return this.lessonService.createLesson(lessonInput);
  }

  @Mutation((returns) => LessonType)
  async assignStudentsToLesson(
    @Args('assignStudent') assignStudent: AssignStudentType,
  ) {
    return this.lessonService.assignStudentsToLesson(assignStudent);
  }
}
