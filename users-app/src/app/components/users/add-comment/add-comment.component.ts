import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddComment(form : NgForm){
    console.log(form)
  }

  onReset(commentForm : NgForm){
    commentForm.reset()
  }

}
