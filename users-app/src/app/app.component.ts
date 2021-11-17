import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers :   [DataService]
})
export class AppComponent {
  title = 'users-app';
  showComp : boolean = true;
}
