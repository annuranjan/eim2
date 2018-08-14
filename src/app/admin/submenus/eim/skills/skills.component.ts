import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsForm: FormGroup;
  statusInvalid;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.skillsForm = this.fb.group({
      languages: this.fb.array([this.getALanguage()]),
      trainings: this.fb.array([this.getATraining()])
    });
  }

  getALanguage() {
    return new FormControl('', Validators.required);
  }

  getATraining() {
    return this.fb.group({
      trainingName: ['', Validators.required],
      dateOfCompletion: ['', Validators.required],
      passingGrade: ['', Validators.required]
    });
  }

  addALanguage() {
    (<FormArray>this.skillsForm.get('languages')).push(this.getALanguage());
  }

  deleteALanguage(index: number) {
    (<FormArray>this.skillsForm.get('languages')).removeAt(index);
  }

  addATraining() {
    (<FormArray>this.skillsForm.get('trainings')).push(this.getATraining());
  }
  deleteATraining(index: number) {
    (<FormArray>this.skillsForm.get('trainings')).removeAt(index);

  }

  onSubmit() {
    console.log(this.skillsForm.value);
    // if (this.skillsForm.status === "INVALID") {
    //   this.statusInvalid = true;
    //   return;
    // }
  }
}
