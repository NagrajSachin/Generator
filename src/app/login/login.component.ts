import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';
import { login } from '../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private userservice : UserService, private router : Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username' : new FormControl(null),
      'password' : new FormControl(null)
    });
  }

  onSubmit(){
    const login : login = {
      'username' : this.loginForm.value.username,
      'password' : this.loginForm.value.password,
    }
    this.userservice.sendLogin(login).subscribe((response)=>{
      console.log(response);
    });
    this.router.navigate(['/form']);
  }
}
