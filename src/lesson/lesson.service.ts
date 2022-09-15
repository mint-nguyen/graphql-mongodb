import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentType } from './assign-student.type';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async getLessonById(id: string): Promise<Lesson> {
    return this.lessonRepository.findOneBy({ id });
  }

  async createLesson(lessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = lessonInput;

    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }

  async assignStudentsToLesson(
    assignStudent: AssignStudentType,
  ): Promise<Lesson> {
    const { lessonId, studentIds } = assignStudent;

    const lesson = await this.lessonRepository.findOneBy({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRepository.save(lesson);
  }
}
