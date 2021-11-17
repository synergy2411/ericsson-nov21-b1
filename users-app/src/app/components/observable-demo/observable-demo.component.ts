import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  obs$ = new Observable((observer)=>{
    setTimeout(()=>{observer.next("First Package")}, 1000)
    setTimeout(()=>{observer.next("Second Package")}, 2000)
    setTimeout(()=>{observer.next("Third Package")}, 4000)
    // setTimeout(()=>{observer.error(new Error('Something bad happened'))}, 5000)
    setTimeout(()=>{observer.next("Fourth Package")}, 7000)
    setTimeout(()=>{observer.complete()}, 8000)
  })

  unSub$ : Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  onSubscribe(){
    this.unSub$ = this.obs$.subscribe({
      next : pkg => console.log("next - ",pkg),
      error : err => console.error(err),
      complete : () => console.log("COMPLETED")
    })
  }

  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }

}
