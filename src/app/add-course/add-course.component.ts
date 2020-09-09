import { Component, OnInit } from '@angular/core';
import { AddCourse } from './addcourse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addcourse:AddCourse=new AddCourse();
  constructor(private router:Router) { }

  ngOnInit(): void {

  
  }
  AddCourse(){

  }

}
