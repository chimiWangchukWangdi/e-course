import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    TeacherComponent,
    AddCourseComponent,
    CourseListComponent,
    DashboardComponent,
    EditCourseComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ]
})
export class TeacherModule { }
