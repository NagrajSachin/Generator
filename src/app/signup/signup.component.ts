import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { signup } from '../models/signup.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;

  constructor(private userservice : UserService, private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'password' : new FormControl(null),
      'phone' : new FormControl(null),
      'city' : new FormControl(null)
    });
  }

  onSubmit(){
    const signUp : signup = {
      'username' : this.signupForm.value.username,
      'email' : this.signupForm.value.email,
      'password' : this.signupForm.value.password,
      'phone' : this.signupForm.value.phone,
      'city' : this.signupForm.value.city
    }
    this.userservice.sendSignup(signUp).subscribe((response)=>{
      console.log(response);
    });
    this.router.navigate(['/login']);
  }
}
