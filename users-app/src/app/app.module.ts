import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [         // Component, Pipe, Directives
    AppComponent
  ],
  imports: [              // Module - Built-in & Custom
    BrowserModule
  ],
  providers: [],         // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
