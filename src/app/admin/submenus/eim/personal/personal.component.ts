import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddEmpService } from '../../../services/add-emp.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personalForm: FormGroup;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  genders: any[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'others', viewValue: 'Others' }
  ];
  bloodGroups: any[] = [
    { value: "O+", viewValue: "O-Positive" },
    { value: "O-", viewValue: "O-Negative" },
    { value: "A+", viewValue: "A-Positive" },
    { value: "A-", viewValue: "A-Negative" },
    { value: "B+", viewValue: "B-Positive" },
    { value: "B-", viewValue: "B-Negative" },
    { value: "AB+", viewValue: "AB-Positive" },
    { value: "AB-", viewValue: "AB-Negative" },
  ];

  maritalStatus: any[] = [
    { value: "unmarried", viewValue: "Unmarried" },
    { value: "married", viewValue: "Married" },
    { value: "divorced", viewValue: "Divorced" },
    { value: "widow/widower", viewValue: "Widow/Widower" },
  ];

  categories: any[] = [
    { value: "general", viewValue: "General" },
    { value: "obc", viewValue: "OBC" },
    { value: "sc/st", viewValue: "SC/ST" },
    { value: "na", viewValue: "Not Applicable" }
  ];

  religions: any[] = [
    { value: "hindu", viewValue: "Hindu" },
    { value: "muslim", viewValue: "Muslim" },
    { value: "christan", viewValue: "Christan" },
    { value: "sikh", viewValue: "Sikh" },
    { value: "jain", viewValue: "Jain" },
    { value: "buddhist", viewValue: "Buddhist" },
    { value: "other", viewValue: "Others" },
  ];

  constructor(
    private fb: FormBuilder,
    private addEmpService: AddEmpService
  ) { }
  ngOnInit() {
    this.personalForm = this.fb.group({
      personal: this.fb.group({
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        nationality: ['', Validators.required],
        bloodGroup: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        category: ['', Validators.required],
        religion: ['', Validators.required],
      }),
      contactDetails: this.fb.group({
        address: this.fb.group({
          address: ['', Validators.required],
          city: [''],
          state: [''],
          pincode: ['']
        }),
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.personalForm.value);
    let personalFormSubmitted = {
      "contactDetails": {
        "address": {
          "address": this.personalForm.value.contactDetails.address.address,
          "city": this.personalForm.value.contactDetails.address.city,
          "state": this.personalForm.value.contactDetails.address.state,
          "pincode": this.personalForm.value.contactDetails.address.pincode
        },
        "email": this.personalForm.value.contactDetails.email,
        "phone": this.personalForm.value.contactDetails.phone
      },
      "personal": {
        "dob": this.personalForm.value.personal.dob,
        "gender": this.personalForm.value.personal.gender,
        "nationality": this.personalForm.value.personal.nationality,
        "bloodGroup": this.personalForm.value.personal.bloodGroup,
        "maritalStatus": this.personalForm.value.personal.maritalStatus,
        "category": this.personalForm.value.personal.category,
        "religion": this.personalForm.value.personal.religion
      }
    }
    this.addEmpService.empDetailsObj = { ...this.addEmpService.empDetailsObj, ...personalFormSubmitted };
    console.log(this.addEmpService.empDetailsObj);
    this.addEmpService.submitEmpDetForm(personalFormSubmitted).subscribe(response => {
      console.log(response);
    });
  }
}

// personal: {
//   dob: String,
//   gender: String,
//   nationality: String,
//   bloodGroup: String,
//   maritalStatus: String,
//   category: String,
//   religion: String
// }

// contactDetails: {
//   address: {
//       address: String,
//       city: String,
//       state: String,
//       pincode: Number
//   },
//   email: {
//       type: String,
//       unique: true
//   },
//   phone: Number
// }