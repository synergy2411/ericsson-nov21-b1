import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from '../../../model/user.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Output() commentEvent = new EventEmitter<Comment>()
  constructor() { }

  ngOnInit(): void {
  }

  onAddComment(form : NgForm){
    const comment : Comment = form.value;
    this.commentEvent.emit(comment);
    form.reset();
  }

  onReset(commentForm : NgForm){
    commentForm.reset()
  }

}
