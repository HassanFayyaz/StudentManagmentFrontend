import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  isCollapsed = false;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  gotoaddcourse(){
    this.router.navigate(['layout/addcourse']);
  }
  gotocourseList(){
    this.router.navigate(['layout/courselist']);
  }
  gotoaddStudent(){
   this.router.navigate(['layout/addstudent'])
  }
  gotoStudentList(){
    this.router.navigate(['layout/student'])
  }
  gotoaddGrade(){
    this.router.navigate(['layout/addgrades'])
  }
  gotoGradeList(){
    this.router.navigate(['layout/gradelist'])
  }
  goToLogin(){
    this.router.navigate(['']);
    sessionStorage.clear();
  }
}
