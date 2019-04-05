import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { PdfService } from '../service/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PDFComponent implements OnInit {
  clicked = false;
  arr : any = [];
  value;
  data;

  constructor(private userservice : UserService, private pdfservice : PdfService) { }

  ngOnInit() {
    this.userservice.getdetails().subscribe((response)=>{
      console.log(response);
      this.arr = response;
    });
  }

  onClick(event){
    this.value =  event.target['value'];
    this.clicked = true;
  }

  btn(){
    this.userservice.getdetail(this.value).subscribe((response)=>{
    this.data = response;
    this.pdfservice.generatePDF(this.data);
    });
  }
}
