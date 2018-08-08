import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  employees = [
    {
      empId: 1,
      firstname: "One",
      lastname: "lastOne"
    },
    {
      empId: 2,
      firstname: "One",
      lastname: "lastOne"
    },
    {
      empId: 12,
      firstname: "One",
      lastname: "lastOne"
    },
    {
      empId: 13,
      firstname: "One",
      lastname: "lastOne"
    },
    {
      empId: 14,
      firstname: "One",
      lastname: "lastOne"
    },
    {
      empId: 15,
      firstname: "One",
      lastname: "lastOne"
    },
    {
      empId: 16,
      firstname: "One",
      lastname: "lastOne"
    },
    {
      empId: 17,
      firstname: "One",
      lastname: "lastOne"
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
