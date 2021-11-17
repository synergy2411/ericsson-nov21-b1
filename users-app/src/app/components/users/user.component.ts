import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { DataService } from 'src/app/services/data.service';
// import { USER_DATA } from '../../model/mock';

@Component({
  selector : 'app-users',
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  users : Array<User>;

  constructor(private dataService: DataService){}

  ngOnInit(){
    // this.users = USER_DATA;
    // this.dataService.getRemoteServerData()
    // this.dataService.createPost()
    this.dataService.getUserData().subscribe(users => {
      this.users = <User[]>users;
    })
  }

  onMoreInfo(usr : User){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!!!`)
  }
}
