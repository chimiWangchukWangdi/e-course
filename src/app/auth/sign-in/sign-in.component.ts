import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseApiService } from 'src/app/services/course.api.service';
import { CourseFacadeService } from 'src/app/services/course.facade.service';
import { AuthFacadeService } from '../../services/auth.facade.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  admin: Array<string> = [];
  teacher: Array<string> = [];
  student: Array<string> = [];
  array: Array<string[]> = [];

  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(public authFacadeService: AuthFacadeService, private courseApiService: CourseApiService, private courseFacadeService: CourseFacadeService, private fb: FormBuilder) { }

  ngOnInit(): void {
     this.courseFacadeService.getRoles().valueChanges().subscribe(res => {
        this.admin = res['admin'];
        this.student = res['student'];
        this.teacher = res['teacher'];
        this.array.push(this.admin, this.student, this.teacher)
    })
  }

  onFormSubmit(form: FormGroup) {
    return this.authFacadeService.signIn(form, this.array);
  }

  googleAuth() {
    return this.authFacadeService.googleAuth();
  }

}
