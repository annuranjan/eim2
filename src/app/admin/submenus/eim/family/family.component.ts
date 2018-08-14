import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  famForm: FormGroup;

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
      'name': ['', Validators.required],
      'relation': ['', Validators.required],
      'age': ['', Validators.required],
      'phone': ['', Validators.required],
      'checkBoxVal': [false],
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
    let name: string = (<FormArray>this.famForm.get('emergencyArray')).at(index).get('name').value;
    (<FormArray>this.famForm.get('emergencyArray')).removeAt(index);
    (<FormArray>this.famForm.get('famArray')).controls.find(x => x.value.name === name).get('checkBoxVal').setValue(false);
  }

  addANomineeGroup() {
    (<FormArray>this.famForm.get('nomineeArray')).push(this.getANomineeGroup());
  }
  deleteANomineeGroup(index: number) {
    (<FormArray>this.famForm.get('nomineeArray')).removeAt(index);
  }

  checkAddRemoveToEmgContact(famGroup: any) {
    famGroup.checkBoxVal = famGroup.checkBoxVal === true ? false : true;
    (<FormArray>this.famForm.get('famArray')).controls.find(x => x.value.name === famGroup.name).get('checkBoxVal').setValue(famGroup.checkBoxVal);

    if (famGroup.checkBoxVal === true) {
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
    if (famGroup.checkBoxVal === false) {
      let index: number = (<FormArray>this.famForm.get('emergencyArray')).controls.findIndex(x => x.value.name === famGroup.name);
      console.log("index found is: " + index);
      if (index !== -1)
        (<FormArray>this.famForm.get('emergencyArray')).removeAt(index);
    }
  }

  onSubmit() {
    console.log(this.famForm);
  }
}
