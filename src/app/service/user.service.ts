import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup } from '../models/signup.model';
import { login } from '../models/login.model';
import { form } from '../models/form.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  details : form;

  constructor(private http : HttpClient) { }

  sendSignup(data : signup){
    return this.http.post<{ message : string }>('http://localhost:3000/signup',data);
  }
  
  sendLogin(data : login){
    return this.http.post<{ message : string }>('http://localhost:3000/login', data);
  }

  formDetails(data : form){
    return this.http.post<{ message: string }>('http://localhost:3000/form', data).subscribe((response)=>{
    console.log(response);  
    });
  }

  getdetails(){
    return this.http.get('http://localhost:3000/form');
  }

  getdetail(id){
    return this.http.get('http://localhost:3000/form/'+ id);
  }
}
