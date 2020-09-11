import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { Router, ActivatedRoute } from '@angular/router';
import { InteractionService } from '../interaction.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  title:any="Add Student";
  changebuttonname:any="Save";
  id:any;
  addstudent:Student=new Student();
  constructor(private router:Router,private service:InteractionService,private activatedroute:ActivatedRoute,private message: NzMessageService) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    if(this.id!=null){
      this.getstudentbyid(this.id);
      this.title="Update Student";
      this.changebuttonname="Update";
    }
  }
  savestudent(){
    if(this.id==null ){ 
      console.log(this.addstudent);
      this.service.postStudent(this.addstudent).subscribe(response=>{
        console.log(response);
        if(response.status==200){
          this.message.success(response.message, { nzDuration: 3000 });
          this.addstudent.studentName="";
          this.addstudent.studentEmail="";
          this.addstudent.studentPassword="";


        }else{
          this.message.error("Some error occured or your email is incorrect", { nzDuration: 3000 });
        }
        
      })      
    }else{
      this.service.updateStudent(this.id,this.addstudent).subscribe(response=>{
        console.log(response);
        if(response.status==200){
          this.message.success(response.message, { nzDuration: 3000 });
        }else{
          this.message.error("Cannot update", { nzDuration: 3000 });
        }
      })

    }
    

  }

  
  getstudentbyid(id:any){
    this.service.getStudentById(id).subscribe(res=>{
      this.addstudent.studentName=res.result.studentName;
      this.addstudent.studentEmail=res.result.studentEmail;
      this.addstudent.studentPassword=res.result.password;
    })

  }

}
