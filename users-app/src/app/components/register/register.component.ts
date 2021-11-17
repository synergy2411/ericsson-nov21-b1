import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    RegisterComponent.isExclamation
  ])
  cnfPassword = new FormControl('',[
    Validators.required,
    RegisterComponent.confirmPassword
  ])

  registrationForm : FormGroup;

  constructor(private fb : FormBuilder, private authService : AuthService) {
    this.registrationForm = this.fb.group({
      xyz : this.username,
      password : this.password,
      cnfPassword : this.cnfPassword
    })
  }

  ngOnInit(): void {
  }

  onRegister(){
    // console.log(this.registrationForm.value.xyz);
    console.log(this.registrationForm)
    this.authService.onRegister(
      this.registrationForm.value.xyz,
      this.registrationForm.value.password
      )
  }

  onReset(){
    this.registrationForm.reset();
  }

  static isExclamation(control : AbstractControl){
    const hasExclamation = control.value.indexOf('!') >= 0
    return hasExclamation ? null : {exclamation : true}
  }

  static confirmPassword(control : AbstractControl){
    if(control.parent && control.parent.controls && control.parent.controls['password']){
      const isMatched = control.value == control.parent.controls['password'].value
      return  isMatched ? null : {notMatched : true}
    }
  }
}
