import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './login/login.component';
import { GradebookComponent } from './gradebook/gradebook.component';
import { TeacherComponent } from './teacher/teacher.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StudentComponent } from './student/student.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AddStudentComponent } from './add-student/add-student.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddcourseweightComponent } from './addcourseweight/addcourseweight.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { NzMessageModule } from 'ng-zorro-antd/message';









registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GradebookComponent,
    TeacherComponent,
    StudentComponent,
    AddStudentComponent,
    AddcourseweightComponent,
    AddCourseComponent,
    CourseListComponent,
    GradeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NgZorroAntdModule,
    NzAvatarModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzMessageModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
