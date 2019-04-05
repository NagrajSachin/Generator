import { Injectable } from '@angular/core';
import { form } from '../models/form.model';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  generatePDF(data : form){
    var doc = new jsPDF();
    doc.fromHTML('RecipeDetailsList', 80, 10);
    doc.fromHTML(`Recipe ID : ${data.recipeId}`, 10,20)
    doc.fromHTML(`Recipe Name : ${data.recipename}`, 10,30);
    doc.fromHTML(`Recipe Color : ${data.recipecolor}`, 10,40);
    doc.fromHTML(`Recipe Cost : ${data.recipecost}`, 10,50);
    doc.fromHTML(`Recipe Ingredients : ${data.ingredients}`, 10,60);
    doc.save('pdf.pdf');
  }
}
