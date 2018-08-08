import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestBuilderService } from '../../../../core/util/request-builder.service';
import { AppGuard } from '../../../../core/util/appGuard.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  submittedSuccessfully;
  addEmpForm: FormGroup;

  usertypes: any[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'manager', viewValue: 'Manager' },
    { value: 'employee', viewValue: 'Employee' }
  ];
  constructor(
    private reqBuilder: RequestBuilderService,
    private appGuard: AppGuard
  ) { }

  ngOnInit() {
    this.addEmpForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'middlename': new FormControl(null),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'usertype': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.addEmpForm);

    const emp = {
      firstname: this.addEmpForm.value.firstname,
      middlename: this.addEmpForm.value.middlename,
      lastname: this.addEmpForm.value.lastname,
      email: this.addEmpForm.value.email,
      usertype: this.addEmpForm.value.usertype,
    };
    this.reqBuilder.addAnEmp(emp).subscribe((emp) => {
      this.submittedSuccessfully = true;
      this.appGuard.newEmpCreated = true;
    },
      (error) => { console.log(error); });
  }

}

