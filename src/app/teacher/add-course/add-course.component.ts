import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CourseApiService } from 'src/app/services/course.api.service';
import { CourseFacadeService } from 'src/app/services/course.facade.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {



  public courseForm!: FormGroup;
  constructor(
    public courseFacadeService: CourseFacadeService,
    public courseApiService: CourseApiService,
    public fb: FormBuilder,
    public authService: AuthService
   // public toastr: ToastrService
  ) {}
  ngOnInit() {
    this.initializer();
  }

  initializer() {
    // this.facadeService.GetCourseList();
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
  get noOfStudents() {
    return this.courseForm?.get('noOfStudents');
  }
  get range() {
    return this.courseForm?.get('range');
  }
  ResetForm() {
    this.courseForm?.reset();
  }
  submitCourseData() {
    const courseCreator: string = this.authService.userData.uid
    this.courseFacadeService.AddCourse(this.courseForm?.value, courseCreator);
    // this.toastr.success(
    //   this.studentForm?.controls['courseTitle'].value + ' successfully added!'
    // );
    this.ResetForm();
  }

}
