import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import * as firebase from 'firebase/compat';
import { Course } from '../shared/model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CourseApiService {
  coursesRef?: AngularFireList<any>;
  courseRef?: AngularFireObject<any>;
  myCourses = [];
  public get currentUser() : string {
    return JSON.parse(localStorage.getItem('user') as string);
  }

  constructor(private db: AngularFireDatabase, private crudApi: AuthService) {}
  // Create Course
  AddCourse(course: Course, courseCreator: string) {
    this.coursesRef?.push({
      courseTitle: course.courseTitle,
      description: course.description,
      creator: courseCreator,
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
  // Fetch courses List based on creator
  GetCourseListCreator(): AngularFireObject<any> {
    const user = JSON.parse(localStorage.getItem('user') as string);
    const uid = user.uid
    console.log(uid)
    let ref = this.db.database.ref("courses-list");
    return this.courseRef = ref.orderByChild("/creator").equalTo(uid).on('child_added', (data) => {
      this.myCourses.push(data.val() as never);
      return data as unknown as  AngularFireObject<any>;
    }) as unknown as AngularFireObject<any>;
   //return this.courseRef!;
  }
  // Update Course Object
  UpdateCourse(course: Course) {
    this.courseRef?.update({
      courseTitle: course.courseTitle,
      description: course.description,
      creator: course.creator,
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
