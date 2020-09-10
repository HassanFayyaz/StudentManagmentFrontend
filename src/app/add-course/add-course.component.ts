import { Component, OnInit } from '@angular/core';
import { AddCourse } from './addcourse';
import { Router, ActivatedRoute } from '@angular/router';
import { InteractionService } from '../interaction.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  title:any="Add Course";
  changebuttonname:any="Save";
  id:any;
  addcourse:AddCourse=new AddCourse();
  constructor(private router:Router,private service:InteractionService,private activatedroute:ActivatedRoute,private message: NzMessageService) { }

  
  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    if(this.id!=null){
      this.getcoursebyid(this.id);
      this.title="Update Course";
      this.changebuttonname="Update";
    }

  
  }
  AddCourse(){

    if(this.id==null){ 
      console.log(this.addcourse);
      this.service.addCourse(this.addcourse).subscribe(response=>{
        console.log(response);
        if(response.status==200){
          this.message.success("Added Successfully", { nzDuration: 3000 });
          this.addcourse.courseName="";
          this.addcourse.courseWeight=null;


        }else{
          this.message.error("Some error occured", { nzDuration: 3000 });
        }
        
      })      
    }else{
      this.service.updateCourse(this.id,this.addcourse).subscribe(response=>{
        console.log(response);
        if(response.status==200){
          this.message.success("updated Successfully", { nzDuration: 3000 });
        }else{
          this.message.error("Cannot update", { nzDuration: 3000 });
        }
      })

    }
    

  }
  getcoursebyid(id:any){
    this.service.getCourseById(id).subscribe(response=>{
      this.addcourse.courseName=response.result.courseName;
      this.addcourse.courseWeight=response.result.courseWeight;
})
    

  }

}
