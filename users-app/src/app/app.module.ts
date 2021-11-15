import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/user.component';

@NgModule({
  declarations: [         // Component, Pipe, Directives
    AppComponent, UsersComponent
  ],
  imports: [              // Module - Built-in & Custom
    BrowserModule
  ],
  providers: [],         // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
