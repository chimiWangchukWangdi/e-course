import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Course } from '../shared/model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseApiService {
  coursesRef?: AngularFireList<any>;
  courseRef?: AngularFireObject<any>;
  role?: AngularFireObject<any>;
  myCourses = [];

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
   // this.coursesRef = this.db.list(/)
   this.role = this.db.object('roles');
  }

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

  setRoles(admin: any, teacher: any, student: any){
    this.role?.update({admin, teacher, student});
  }

  getRoles(){
    this.role = this.db.object('roles');
    return this.role;
  }
}
