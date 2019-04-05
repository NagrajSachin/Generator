import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ExcelService } from '../service/excel.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class EXCELComponent implements OnInit {
  value;
  data;
  arr : any = [];
  clicked = false;
 
  constructor(private userservice : UserService,private excelservice : ExcelService){}

  ngOnInit() {
    this.userservice.getdetails().subscribe((response)=>{
      // console.log(response);
      this.arr = response;
    });
  }

  onClick(event){
    this.value =  event.target['value'];
    this.clicked = true;
  }

  btn(){
    let arrayData = []
    this.userservice.getdetail(this.value).subscribe((response)=>{
      arrayData.push(response)
    this.excelservice.exportAsExcelFile(arrayData,'excel');
    });
  }
}
