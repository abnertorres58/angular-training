import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // Create en array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@mail.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@mail.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@mail.com", 90000),
    new SalesPerson("Mai", "Truong", "mai.truong@mail.com", 60000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
