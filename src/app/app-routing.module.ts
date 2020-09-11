import { GradeListComponent } from './grade-list/grade-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GradebookComponent } from './gradebook/gradebook.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AddcourseweightComponent } from './addcourseweight/addcourseweight.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {path:'gradebook',component:GradebookComponent, canLoad:[AuthGuard]},
  {path:'',component:LoginComponent},
  {path:'layout',component:TeacherComponent, canActivate:[AuthGuard],
  children:[
    {path:'',component:StudentComponent, canActivate:[AuthGuard]},
    {path:'student',component:StudentComponent, canActivate:[AuthGuard]},
    {path:'addstudent',component:AddStudentComponent, canActivate:[AuthGuard]},
    {path:'addgrades',component:AddcourseweightComponent, canActivate:[AuthGuard]},
    {path:'gradelist',component:GradeListComponent, canActivate:[AuthGuard]},
    {path:'addcourse',component:AddCourseComponent, canActivate:[AuthGuard]},
    {path:'addcourse/:id',component:AddCourseComponent, canActivate:[AuthGuard]},
    {path:'courselist',component:CourseListComponent, canActivate:[AuthGuard]},
    {path:'addstudent/:id',component:AddStudentComponent, canActivate:[AuthGuard]}

  
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
