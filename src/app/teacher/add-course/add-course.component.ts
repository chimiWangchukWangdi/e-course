import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CourseApiService } from 'src/app/services/course.api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  public courseForm!: FormGroup;
  constructor(
    public crudApi: CourseApiService,
    public fb: FormBuilder,
    public authService: AuthService
   // public toastr: ToastrService
  ) {}
  ngOnInit() {
    this.initializer();
  }

  initializer() {
    this.crudApi.GetCourseList();
    this.courseFormFn();
  }

  courseFormFn() {
    this.courseForm = this.fb.group({
      courseTitle: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      noOfStudents: ['',[Validators.required]],
      range: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  get courseTitle() {
    return this.courseForm?.get('courseTitle');
  }
  get courseDetail() {
    return this.courseForm?.get('description');
  }
  get email() {
    return this.courseForm?.get('email');
  }
  get mobileNumber() {
    return this.courseForm?.get('mobileNumber');
  }
  ResetForm() {
    this.courseForm?.reset();
  }
  submitCourseData() {
    this.crudApi.AddCourse(this.courseForm?.value);
    // this.toastr.success(
    //   this.studentForm?.controls['courseTitle'].value + ' successfully added!'
    // );
    this.ResetForm();
  }

}
