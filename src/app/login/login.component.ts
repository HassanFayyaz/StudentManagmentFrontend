import { Component, OnInit } from '@angular/core';
import { login } from './login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new login()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit(){  
    console.log(this.login.username)
    console.log(this.login.password)

    if(this.login.username=="hassan" && this.login.password=="123"){
      this.router.navigate(['teacher']);
    }

  }

}
