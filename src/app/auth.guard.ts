import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad} from '@angular/router';

import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {

  constructor( private service: InteractionService , private route :Router ){}

  canActivate(): boolean {
    if(this.service.loggedIn() && this.service.teacherRole()){
      return true
    }else{
      this.route.navigate([''])
      return false
    }
  }

  canLoad():boolean {
    if(this.service.loggedIn() && this.service.studentRole()){
      return true
    }else{
      this.route.navigate([''])
      return false
    }
   
  }

  

  

  
}
