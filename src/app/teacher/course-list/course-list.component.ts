import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CourseApiService } from 'src/app/services/course.api.service';
import { CourseFacadeService } from 'src/app/services/course.facade.service';
import { Course } from 'src/app/shared/model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  p: number = 1;
  Course?: Course[];
  hideWhenNoCourse: boolean = true;
  noData: boolean = true;
  preLoader: boolean = false;

  constructor(
    public authService: AuthService,
    private courseApiService: CourseApiService,
    private courseFacadeService: CourseFacadeService,
    //public toastr: ToastrService
    //public authService: AuthService
    ){ }

  ngOnInit() {
    this.dataState();
    let s = this.courseFacadeService.GetCourseListCreator();
    this.Course = this.courseApiService.myCourses;
  }
  dataState() {
    this.courseApiService.GetCourseList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoCourse = false;
        this.noData = true;
      } else {
        this.hideWhenNoCourse = true;
        this.noData = false;
      }
    })
  }
  deleteCourse(student: Course) {
   if (window.confirm('Are sure you want to delete this Course ?')) {
        this.courseApiService.DeleteCourse(student.$key)
     // this.toastr.success(course.firstName + ' successfully deleted!');
    }
  }

  newPage(event: any) {
    this.p = event;
  }

}
