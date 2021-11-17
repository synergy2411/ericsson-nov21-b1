import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';

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
    RegisterComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [
    // Module - Built-in & Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  // providers: [DataService], // Services
  providers: [], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
