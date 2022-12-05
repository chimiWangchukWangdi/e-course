import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/compat/database";
import { Course } from "../shared/model";
import { AuthService } from "./auth.service";
import { CourseApiService } from "./course.api.service";

@Injectable({
  providedIn: 'root'
})
export class CourseFacadeService {

  role?: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private authService: AuthService, private courseApiService: CourseApiService) {
    this.role = this.db.object('roles');
  }

  GetCourse(id: string) {
    return this.courseApiService.GetCourse(id);
  }

  GetCourseList() {
    return this.courseApiService.GetCourseList();
  }

  GetCourseListCreator(): AngularFireObject<any> {
    return this.courseApiService.GetCourseListCreator();
  }

  AddCourse(course: Course, courseCreator: string) {
    return this.courseApiService.AddCourse(course, courseCreator);
  }

  UpdateCourse(course: Course) {
    return this.courseApiService.UpdateCourse(course);
  }

  DeleteCourse(id: string) {
    return this.courseApiService.DeleteCourse(id);
  }

  SignUp(email: string, password: string) {
    return this.authService.SignUp(email, password);
  }

  setRoles(admin: any, teacher: any, student: any){
    this.courseApiService.setRoles(admin, teacher, student);
  }

  getRoles(){
    return this.courseApiService.getRoles();
  }

  getStudentsRequest(id: string){
    return this.courseApiService.getStudentsRequest(id);
  }

  setStudentsRequest(id: string, studentsRequestList: Array<string>){
    return this.courseApiService.setStudentsRequest(id, studentsRequestList);
  }
}
