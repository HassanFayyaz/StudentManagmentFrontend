import { Component, OnInit } from '@angular/core';
import { login } from './login';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin:login = new login()

  constructor(private router: Router,private service:InteractionService,private message: NzMessageService) { }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    
  }

  loginSubmit(){  


    this.service.loginuser(this.userlogin).subscribe(res=>{
      if(res){
      if(res.status==200){
        console.log(res);
        sessionStorage.setItem('token',res.result.token);
              sessionStorage.setItem('username',res.result.username);
              sessionStorage.setItem('role',res.result.userType);
              sessionStorage.setItem("studentEmail",res.result.email)
              if(res.result.userType=="student"){
                this.message.success("Successfull Welcome"+" "+res.result.username, { nzDuration: 3000 });
                this.router.navigate(['gradebook']);
              }else if(res.result.userType=="teacher"){
                this.router.navigate(['layout']);
                this.message.success("Succesfull Welcome Teacher", { nzDuration: 3000 });
              }else{
                this.message.warning("not found", { nzDuration: 3000 });

              }
              


      }
    }

    }, error =>{
      if(error){
        this.message.error('Invalid User',{ nzDuration: 3000 })
       

      }
    })

   

  }

}
