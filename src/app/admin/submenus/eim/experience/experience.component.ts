import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  expForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.expForm = this.fb.group({
      experience: this.fb.array([this.getAExperience()])
    });
  }

  getAExperience() {
    return this.fb.group({
      companyName: ['', Validators.required],
      designation: ['', Validators.required],
      joiningDate: ['', Validators.required],
      leavingDate: ['', Validators.required],
      reasonForLeaving: ['', Validators.required],
      jobDescription: ['', Validators.required],
      projectDesc: ['', Validators.required]
    });
  }

  addAExperience() {
    (<FormArray>this.expForm.get('experience')).push(this.getAExperience());
  }
  deleteAExperience(index: number) {
    (<FormArray>this.expForm.get('experience')).removeAt(index);
  }

}
