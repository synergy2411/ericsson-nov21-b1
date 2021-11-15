import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/user.component';

@NgModule({
  declarations: [         // Component, Pipe, Directives
    AppComponent, UsersComponent
  ],
  imports: [              // Module - Built-in & Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],         // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
