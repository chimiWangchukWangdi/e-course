import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseApiService } from 'src/app/services/course.api.service';
import {Location} from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { CourseFacadeService } from 'src/app/services/course.facade.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  editForm!: FormGroup;
  constructor(
    private courseApiService: CourseApiService,
    private courseFacadeService: CourseFacadeService,
    public authService: AuthService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
   //private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initializer();
  }

  initializer() {
    this.updateStudentData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.courseFacadeService
      .GetCourse(id!)
      .valueChanges()
      .subscribe((data) => {
        this.editForm?.setValue(data);
      });
  }

  get courseTitle() {
    return this.editForm?.get('courseTitle');
  }
  get description() {
    return this.editForm?.get('description');
  }
  get creator() {
    return this.editForm?.get('creator');
  }
  get noOfStudents() {
    return this.editForm?.get('noOfStudents');
  }
  get range() {
    return this.editForm?.get('range');
  }
  updateStudentData() {
    this.editForm = this.fb.group({
      courseTitle: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      creator: [''],
      noOfStudents: ['',[Validators.required]],
      range: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  goBack() {
    this.location.back();
  }
  updateForm() {
    this.courseFacadeService.UpdateCourse(this.editForm?.value);
    // this.toastr.success(
    //   this.editForm?.controls['firstName'].value + ' updated successfully'
    // );
    this.router.navigate(['view-courses']);
  }

}
