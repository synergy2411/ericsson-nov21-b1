import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsesGaurdService implements CanActivate {

  constructor() { }

  canActivate():boolean | Promise<boolean> | Observable<boolean>{
    const token = localStorage.getItem("token");
    return token ? true : false;
  }
}
