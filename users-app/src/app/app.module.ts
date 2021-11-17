import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/user.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { AddCommentComponent } from './components/users/add-comment/add-comment.component';
import { RegisterComponent } from './components/register/register.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    // Component, Pipe, Directives
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    LifeCycleDemoComponent,
    PipeDemoComponent,
    CountryCodePipe,
    ReversePipe,
    AddCommentComponent,
    RegisterComponent
  ],
  imports: [
    // Module - Built-in & Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
