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

}
