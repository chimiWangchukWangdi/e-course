import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'register-course', component: AddCourseComponent },
  { path: 'view-courses', component: CourseListComponent },
  { path: 'edit-course/:id', component: EditCourseComponent },
  { path: 'edit-course', component: EditCourseComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
    exports: [
    RouterModule
    ],
    declarations: []
})
export class TeacherRoutingModule { }
