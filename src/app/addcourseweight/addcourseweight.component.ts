import { Router, ActivatedRoute } from '@angular/router';
import { InteractionService } from './../interaction.service';
import { Component, OnInit } from '@angular/core';
import { addcourseweight } from './addcourseweight';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-addcourseweight',
  templateUrl: './addcourseweight.component.html',
  styleUrls: ['./addcourseweight.component.css']
})
export class AddcourseweightComponent implements OnInit {

  weightObj = new addcourseweight();

  constructor(private service: InteractionService, private message: NzMessageService, private router: Router, private activateRoute: ActivatedRoute) { }

  studentArray = [];
  courseArray = [];
  id
  title:any="Add Grade";
  changebuttonname:any="Save";

  ngOnInit(): void {
    
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.getGrade();
      this.title="Update Grade";
      this.changebuttonname="Update";
    } else {
      this.getAllStudents();
      this.getAllCourses();
    }
  }

  postGrade() {
    let courseweight=this.weightObj.course.courseWeight;

    console.log(this.weightObj);
    if (!this.id && courseweight>this.weightObj.courseMarks ) {
      this.service.postGrade(this.weightObj).subscribe(res => {
        console.log(res)
        if (res.status == 200) {
          this.message.success("Grade Added Successfully", { nzDuration: 3000 })
          this.EmptyFields();
         
        }
        else {
          this.message.error("Something Went Wrong Or ", { nzDuration: 3000 })
        }
      })
    }
    else if(this.id!=null) {
      this.service.updateGrades(this.id, this.weightObj).subscribe(res => {
        console.log(res)
        if (res.status == 200) {
          this.message.success("Grade Updated Successfully", { nzDuration: 3000 })
          this.EmptyFields();
        }
        else {
          this.message.error("Cannot Update", { nzDuration: 3000 });
        }
      })
    }else{
      this.message.error("Course marks cannot be greather than its course weight", { nzDuration: 3000 });

    }
  }

  EmptyFields() {
    this.weightObj.student = "";
    this.weightObj.course = null;
    this.weightObj.courseMarks = "";
  }

  getAllStudents() {
    this.service.getAllStudents().subscribe(res => {
      console.log("Students", res)
      res.map(r => {
        r.isSelected = false;
      })
      this.studentArray = res;
      let index = this.studentArray.findIndex(sa => sa.id == this.weightObj.student["id"]);
      if (index > -1) {
        this.weightObj.student = this.studentArray[index];
      }
    })
  }
  getAllCourses() {
    this.service.getAllCourse().subscribe(res => {
      console.log("Courses", res)
      
      res.result.map(r => {
        r.isSelected = false;
      })

      this.courseArray = res.result;
      
      let index = this.courseArray.findIndex(sa => sa.id == this.weightObj.course["id"]);
      if (index > -1) {
        this.weightObj.course = this.courseArray[index];
      }
    })
  }


  

  getGrade() {
    this.service.getGradeById(this.id).subscribe(res => {
      console.log(res);
      console.log("Value", res.result.student.studentName)
      console.log("Value", res.result.course.courseName)


      this.weightObj.student = res.result.student;
      this.weightObj.course = res.result.course;
      this.weightObj.courseMarks = res.result.courseMarks;

      this.getAllStudents();
      this.getAllCourses();
    })
  }




}
