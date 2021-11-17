import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { USER_DATA } from "../model/mock";

@Injectable({
  providedIn : 'root'
})
export class DataService{

  constructor(private httpClient : HttpClient){}

  getUserData(){
    return this.httpClient.get("./assets/data/user-data.json")
  }

  getRemoteServerData(){
    this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(response => {
        console.log(response)
      })
  }

  createPost(){
    this.httpClient.post("https://jsonplaceholder.typicode.com/posts",{
      title : "The Title",
      body : "...."
    }).subscribe(response => {console.log(response)})
  }
}
