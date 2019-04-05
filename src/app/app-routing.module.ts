import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormdetailsComponent } from './formdetails/formdetails.component';
import { DetailsComponent } from './details/details.component';
import { PDFComponent } from './pdf/pdf.component';
import { EXCELComponent } from './excel/excel.component';

const routes: Routes = [
  { path : '', component : SignupComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'login', component : LoginComponent},
  { path : 'form', component : FormdetailsComponent},
  { path : 'detail', component : DetailsComponent},
  { path : 'pdf', component : PDFComponent},
  { path : 'excel', component : EXCELComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
