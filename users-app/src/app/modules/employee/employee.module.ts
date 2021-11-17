import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { RouterModule, Routes } from '@angular/router';

const EMP_ROUTES : Routes = [
  {
    path : "",        // http://localhost:4200/employee
    component : NewEmployeeComponent
  }
]

@NgModule({
  declarations: [NewEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EMP_ROUTES)
  ]
})
export class EmployeeModule { }
