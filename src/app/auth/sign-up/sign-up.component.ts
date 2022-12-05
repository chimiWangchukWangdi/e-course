import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacadeService } from 'src/app/services/auth.facade.service';
import { CourseApiService } from 'src/app/services/course.api.service';
import { CourseFacadeService } from 'src/app/services/course.facade.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  isSubmitted = false;
  Roles: any = ['Teacher', 'Student', 'Admin'];
  admin: Array<string> = [];
  teacher: Array<string> = [];
  student: Array<string> = [];

  characterRoleForm = this.fb.group({
    characterRole: ['', [Validators.required]],
  });

  constructor(
    private courseFacadeService: CourseFacadeService,
    private authFacadeService: AuthFacadeService,
    public authService: AuthService,
    private apiService: CourseApiService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializer();
  }

  initializer() {
    this.courseFacadeService
      .getRoles()
      .valueChanges()
      .subscribe((res) => {
        if(!Object.keys(res).length) {
          this.courseFacadeService.setRoles([' '], [' '], [' ']);
        }
        this.admin = res['admin'];
        this.student = res['student'];
        this.teacher = res['teacher'];
      });
  }
  changeRole(e: any) {
    this.characterRole?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get characterRole() {
    return this.characterRoleForm.get('characterRole');
  }

  signUp(email: string, password: string, characterRoleForm: FormGroup) {
    this.courseFacadeService.SignUp(email, password);
    const role = JSON.stringify(characterRoleForm.value);
    if (this.characterRoleForm.value.characterRole === 'Admin') {
      this.admin.push(email);
    }
    else if (this.characterRoleForm.value.characterRole === 'Teacher') {
      this.teacher.push(email);
    }
    else if (this.characterRoleForm.value.characterRole === 'Student') {
      this.student.push(email);
    }
    this.apiService.setRoles(this.admin, this.teacher, this.student);
  }
}
