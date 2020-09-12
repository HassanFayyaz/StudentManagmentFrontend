import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad, ActivatedRouteSnapshot } from '@angular/router';

import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  getRole = () => {
    return sessionStorage.getItem("role");
  }

  constructor(private service: InteractionService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    console.log(route.data, "===============")

    let { data } = route;
    if (data[this.getRole()] && this.service.loggedIn()) 
      return true;
    else {
      this.route.navigate([''])
      return false;
    }


  }



  canLoad(): boolean {
    if (this.service.loggedIn() && this.service.studentRole()) {
      return true
    } else {
      this.route.navigate([''])
      return false
    }

  }






}
