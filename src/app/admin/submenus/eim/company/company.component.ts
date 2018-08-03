import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyForm: FormGroup;
  employeeStatus: { value: string, viewValue: string }[] = [
    { value: "permanent", viewValue: "Permanent" },
    { value: "temporary", viewValue: "Temporary" }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.companyForm = this.fb.group({
      employeeStatus: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      dateOfLeaving: [''],
      dept: [''],
      designation: [''],
      salary: [],
      manager: ['']
    });
  }
  onSubmit() {
    console.log(this.companyForm);
  }
}