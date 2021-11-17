import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  onRegister(email : string, password : string){
    // Make XHR Call to register the User from here
    if(email && password){
      localStorage.setItem("token", "TOKEN_BY_SERVER")
      this.router.navigate(['/users']);
    }
  }
}
