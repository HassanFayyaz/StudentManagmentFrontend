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

  weightObj= new addcourseweight();

  constructor(private service: InteractionService,private message: NzMessageService, private router: Router, private activateRoute: ActivatedRoute) { }

  studentArray=[];
  courseArray=[];
  gardesArray=[];
  id

  ngOnInit(): void {
   this.getByID();
   this.getAllStudents();
   this.getAllCourses();
   this.getAllGrades();
    
  }

  postGrade(){
   console.log(this.weightObj);
   if(!this.id){
     this.service.postGrade(this.weightObj).subscribe(res=>{
       console.log(res)
       if(res==200){
         this.message.success("Grade Added Successfully",{nzDuration:3000})
          this.EmptyFields();
       }
       else{
         this.message.error("Something Went Error",{nzDuration:3000})
       }
     })
   }
   else{
     this.service.updateGrades(this.id,this.weightObj).subscribe(res=>{
      this.message.success("Employee Updated Successfully", { nzDuration: 3000 })
      this.EmptyFields();
     })
   }
  }

  EmptyFields(){
    this.weightObj.student="";
    this.weightObj.course="";
    this.weightObj.courseMarks="";
  }

  getAllStudents(){
    this.service.getAllStudents().subscribe(res=>{
      this.studentArray=res.result;
    })
  }

  getAllCourses(){
    this.service.getAllCourse().subscribe(res=>{
      this.courseArray=res.result;
    })
  }

  
  getByID(){
    this.id= this.activateRoute.snapshot.params['id'];
    if(this.id){
     this.getGrade();
    }
  }

  getGrade(){
    this.service.getGradeById(this.id).subscribe(res=>{
      this.weightObj.student=res.result;
      this.weightObj.course= res.result;
      this.weightObj.courseMarks=res.result;
    })
  }

  getAllGrades(){
    this.service.getAllGrades().subscribe(res=>{
    this.gardesArray=res.result;
    })
  }


}
