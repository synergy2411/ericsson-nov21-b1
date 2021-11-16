import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { USER_DATA } from '../../model/mock';

@Component({
  selector : 'app-users',
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  users : Array<User>;


  ngOnInit(){
    this.users = USER_DATA;
  }

  onMoreInfo(usr : User){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!!!`)
  }
}
