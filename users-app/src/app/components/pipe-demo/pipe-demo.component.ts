import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  promiseData = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Data arraived.")
    }, 3000)
  })

  contactNumber = 987654321;

  username = "Foo Bar"

  constructor() { }

  ngOnInit(): void {
  }

}
