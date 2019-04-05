import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';
import { form } from '../models/form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formdetails',
  templateUrl: './formdetails.component.html',
  styleUrls: ['./formdetails.component.css']
})
export class FormdetailsComponent implements OnInit {

  FormDetail : FormGroup;

  constructor(private userservice : UserService, private router : Router) { }

  ngOnInit() {
    this.FormDetail = new FormGroup({
      'recipeId' : new FormControl(null),
      'recipename' : new FormControl(null),
      'recipecolor' : new FormControl(null),
      'recipecost' : new FormControl(null),
      'ingredients' : new FormControl(null)
    });
  }
  
  onSubmit(){
    const fDetails : form = {
      'recipeId' : this.FormDetail.value.recipeId,
      'recipename' : this.FormDetail.value.recipename,
      'recipecolor' : this.FormDetail.value.recipecolor,
      'recipecost' : this.FormDetail.value.recipecost,
      'ingredients' : this.FormDetail.value.ingredients
    }
    this.userservice.formDetails(fDetails);
    this.router.navigate(['/detail']);
  }
}
