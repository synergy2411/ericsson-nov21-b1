import { Component } from '@angular/core';

@Component({
  selector : 'app-users',
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent{
  user = {
    firstName : "bill",
    lastName : "gates",
    income : 50000,
    dob : new Date('Dec 21, 1964'),
    isWorking : true,
    company : "microsoft",
    imgSrc : "./assets/images/bill.jpg",
    votes : 120
  }

  onMoreInfo(usr : any){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!!!`)
  }
}
