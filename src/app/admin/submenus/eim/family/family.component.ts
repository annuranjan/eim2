import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  famForm: FormGroup;
  checkBoxVal: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.famForm = this.fb.group({
      famArray: this.fb.array([this.getAFamGroup()]),
      emergencyArray: this.fb.array([this.getAEmergencyGroup()]),
      nomineeArray: this.fb.array([this.getANomineeGroup()])
    });
  }

  getAFamGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      relation: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  getAEmergencyGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      relation: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }

  getANomineeGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      relation: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  addAFamGroup() {
    (<FormArray>this.famForm.get('famArray')).push(this.getAFamGroup());
  }
  deleteAFamGroup(index: number) {
    (<FormArray>this.famForm.get('famArray')).removeAt(index);
  }

  addAnEmgGroup() {
    (<FormArray>this.famForm.get('emergencyArray')).push(this.getAEmergencyGroup());
  }
  deleteAnEmgGroup(index: number) {
    (<FormArray>this.famForm.get('emergencyArray')).removeAt(index);
  }

  addANomineeGroup() {
    (<FormArray>this.famForm.get('nomineeArray')).push(this.getANomineeGroup());
  }
  deleteANomineeGroup(index: number) {
    (<FormArray>this.famForm.get('nomineeArray')).removeAt(index);
  }

  checkAddRemoveToEmgContact(famGroup: any) {
    if (this.checkBoxVal === undefined) {
      this.checkBoxVal = true;
    } else {
      this.checkBoxVal = this.checkBoxVal === true ? false : true;
    }
    console.log("Check clicked!");
    console.log(this.checkBoxVal);
    console.log("famGroup passed");
    console.log(famGroup);
    if (this.checkBoxVal === true) {
      let emgGroup = this.fb.group({
        name: [famGroup.name],
        relation: [famGroup.relation],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        phone: [famGroup.phone, Validators.required],
        pincode: ['', Validators.required]
      });
      (<FormArray>this.famForm.get('emergencyArray')).insert(0, emgGroup);
    }
  }

  onSubmit() {
    console.log(this.famForm);
  }
}
