import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { CourseApiService } from './course.api.service';
import { CourseFacadeService } from './course.facade.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private authService: AuthService, private courseApiService: CourseApiService, private courseFacadeService: CourseFacadeService) { }

  signIn(form: FormGroup, array:Array<string[]>) {
    let userName = form.get('userName')?.value;
    let password = form.get('password')?.value;
    return this.authService.SignIn(userName, password, array);
  }

  googleAuth() {
    return this.authService.GoogleAuth();
  }

  signOut() {
    return this.authService.SignOut();
  }

  setRole(admin: any, teacher: any, student: any) {
    this.courseFacadeService.setRoles(admin, teacher, student);
  }

  getRoles(){
    return this.courseFacadeService.getRoles();
  }
}
