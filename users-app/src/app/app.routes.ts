import { Routes } from "@angular/router";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { OverviewComponent } from "./components/product/overview/overview.component";
import { ProductComponent } from "./components/product/product.component";
import { SpecificationComponent } from "./components/product/specification/specification.component";
import { RegisterComponent } from "./components/register/register.component";
import { UsersComponent } from "./components/users/user.component";
import { UsesGaurdService } from "./services/uses-gaurd.service";

export const APP_ROUTES : Routes = [
  {
    path : "register",         // http://localhost:4200/register
    component : RegisterComponent
  },{
    path : 'users',           // http://localhost:4200/users
    component : UsersComponent,
    canActivate : [UsesGaurdService]
  },{
    path : 'pipe-demo',       // http://localhost:4200/pipe-demo
    component : PipeDemoComponent
  },{
    path : 'observable-demo',     // http://localhost:4200/observable-demo
    component : ObservableDemoComponent
  },{
    path : "product",
    component : ProductComponent,
    children : [
      {path :"overview/:id", component : OverviewComponent},
      {path : "specification", component : SpecificationComponent}
    ]
  },{
    path : "employee",
    loadChildren : () => import("./modules/employee/employee.module").then(m => m.EmployeeModule)
  },{
    path : '**',                // http://localhost:4200/not-exist
    redirectTo : 'register',
    pathMatch : 'full'
  }
]
