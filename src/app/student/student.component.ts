import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentlist: any[] = [];

  constructor(private router: Router, private service: InteractionService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getallstudents();
  }
  getallstudents() {
    this.service.getAllStudents().subscribe(response => {
      console.log(response);
      if (response) {
        this.studentlist = response;

        if (response.length == 0) {

          this.message.warning("No Data Found ", { nzDuration: 3000 });

        } else {
          this.message.success("Sucessfull", { nzDuration: 3000 });
        }
      } else {
        this.message.error("Something Went Wrong", { nzDuration: 3000 });
      }
    })
  }
  updatestudent(id: any) {
    this.router.navigate(['layout/addstudent/' + id]);
  }

  goToAddStudent() {
    this.router.navigate(['layout/addstudent'])
  }

  deletestudent(id: any) {
    this.service.deleteStudent(id).subscribe(d => {
      console.log(d);
      if (d.status == 200) {
        this.message.success("Sucessfully deleted", { nzDuration: 3000 });
        this.getallstudents();
      } else {
        this.message.error("Something Went Wrong ", { nzDuration: 3000 });
      }

    })

  }



}
