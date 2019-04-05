import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { form } from '../models/form.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private userservice : UserService) { }

  ngOnInit() {
  }
}
