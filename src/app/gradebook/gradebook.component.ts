import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { InteractionService } from './../interaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
  
  userEmail
  studentName
  studentEmail
  courseWeight
  obtainedMarks
  Grade

  constructor(private service: InteractionService,private message: NzMessageService, private router: Router, private activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem("studentEmail")
    console.log("Email",this.userEmail)
    this.getGradeBook(this.userEmail);
   }

   getGradeBook(email:any){
     this.service.getGradeBookData(email).subscribe(res=>{
       console.log("Response",res)
       this.studentEmail=res.result.email;
       this.studentName=res.result.student_name;
       this.courseWeight= res.result.courseWeight;
       this.obtainedMarks=res.result.obtainedMarks;
       console.log(this.studentEmail)
       console.log(this.studentName)
       console.log(this.courseWeight)
       console.log(this.obtainedMarks)
       let result=(this.obtainedMarks/this.courseWeight)*100;
       console.log(result)
       if(isNaN(result)){
         this.Grade=0;
       }
       else{
         this.Grade=result;
       }
       
       console.log(this.Grade);
     })
   }
   goToLogin(){
   this.router.navigate(['']);
   sessionStorage.clear();
   }

  
  gridStyle = {
    width: '40%',
    textAlign: 'center',
    backgroundColor:'rgb(41, 98, 204)',
    color:'white'
  };
  gridStyle1 = {
    width: '60%',
    textAlign: 'center',
    backgroundColor:'rgb(41, 98, 204)',
    color:'white'
  };


  gridStyle2 = {
    width: '50%',
    textAlign: 'center',
    backgroundColor:'rgb(41, 98, 204)',
    color:'white',
    height: '50px'
  };

}
