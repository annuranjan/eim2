import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalForm = this.fb.group({
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      category: ['', Validators.required],
      religion: ['', Validators.required],
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
    console.log(this.personalForm);
  }
}


// dob: String,
// gender: String,
// nationality: String,
// bloodGroup: String,
// maritalStatus: String,
// category: String,
// religion: String

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