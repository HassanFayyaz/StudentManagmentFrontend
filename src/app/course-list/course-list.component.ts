import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Response } from 'selenium-webdriver/http';
import { empty } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  checkarray:any[]=[];
  courselist:any[]=[];
  constructor(private router:Router,private service:InteractionService,private message: NzMessageService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }
getAllCourses(){
  this.service.getAllCourse().subscribe(response=>{
    console.log(response);
    if(response.status==200){
      this.courselist=response.result;
      if(response.result.length==0){

        this.message.warning("No Data Found ", { nzDuration: 3000 });
      
      }else{
      this.message.success("Sucessfull", { nzDuration: 3000 });
      }
    }else{
      this.message.error("Something Went Wrong", { nzDuration: 3000 });
    }
  })
}

updatecourse(id:any){
  this.router.navigate(['layout/addcourse/'+id])
}
deletecourse(id:any){
  this.service.deletecourse(id).subscribe(d=>{
    console.log(d);
    if(d.status==200){
      this.message.success("Sucessfully deleted", { nzDuration: 3000 });
      this.getAllCourses();
    }else{
      this.message.error("Something Went Wrong ", { nzDuration: 3000 });
    }

  })
}
}
