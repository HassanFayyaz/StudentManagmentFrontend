import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { InteractionService } from './../interaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})
export class GradeListComponent implements OnInit {

  gradesArray:any=[];


  constructor(private service: InteractionService,private message: NzMessageService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllGrades();
  }
  getAllGrades(){
    this.service.getAllGrades().subscribe(res=>{
      console.log("Gradesss",res)
    this.gradesArray=res;
    })
  }

  updateGrades(id:any){
    this.router.navigate(['layout/addgrades/'+id])
  }
  deleteGrades(id:any){
    this.service.deleteGrade(id).subscribe(d=>{
      console.log(d);
      if(d.status==200){
        this.message.success("Sucessfully deleted", { nzDuration: 3000 });
        this.getAllGrades();
      }else{
        this.message.error("Something Went Wrong ", { nzDuration: 3000 });
      }
  
    })
  }

}
