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

const routes: Routes = [
  {path:'gradebook',component:GradebookComponent},
  {path:'',component:LoginComponent},
  {path:'layout',component:TeacherComponent,
  children:[
    {path:'',component:StudentComponent},
    {path:'student',component:StudentComponent},
    {path:'addstudent',component:AddStudentComponent},
    {path:'addgrades',component:AddcourseweightComponent},
    {path:'addcourse',component:AddCourseComponent},
    {path:'courselist',component:CourseListComponent}

  
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
