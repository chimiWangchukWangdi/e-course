import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Course } from '../shared/model';


@Injectable({
  providedIn: 'root'
})
export class CourseApiService {

  coursesRef?: AngularFireList<any>;
  courseRef?: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create Course
  AddCourse(course: Course) {
    this.coursesRef?.push({
      courseTitle: course.courseTitle,
      description: course.description,
      noOfStudents: course.noOfStudents,
      range: course.range,
    });
  }
  // Fetch Single Course Object
  GetCourse(id: string) {
    this.courseRef = this.db.object('courses-list/' + id);
    return this.courseRef;
  }
  // Fetch courses List
  GetCourseList() {
    this.coursesRef = this.db.list('courses-list');
    return this.coursesRef;
  }
  // Update Course Object
  UpdateCourse(course: Course) {
    this.courseRef?.update({
      courseTitle: course.courseTitle,
      description: course.description,
      noOfStudents: course.noOfStudents,
      range: course.range,
    });
  }
  // Delete Course Object
  DeleteCourse(id: string) {
    this.courseRef = this.db.object('courses-list/' + id);
    this.courseRef.remove();
  }
}
