import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  @Input() user : User;
  tab = 1;

  dynamicClass : {'my-border' : boolean, 'my-feature' : boolean} = {'my-border' : true, 'my-feature': false}
  dynamicStyle = {
    'text-decoration': 'none'
  }

  onToggle(){
    this.dynamicClass['my-border'] = !this.dynamicClass['my-border']
    this.dynamicClass['my-feature'] = !this.dynamicClass['my-feature']
  }

  onToggleStyle(){
    this.dynamicStyle['text-decoration'] = 'underline';
  }

  onRemoveStyle(){
    this.dynamicStyle['text-decoration'] = 'none';
  }

}
