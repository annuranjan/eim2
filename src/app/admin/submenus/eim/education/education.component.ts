import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  eduForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.eduForm = this.fb.group({
      education: this.fb.array([
        this.getAnEducation()
      ])
    });
  }

  getAnEducation() {
    return this.fb.group({
      qualification: ['', Validators.required],
      schoolName: ['', Validators.required],
      passingYear: ['', Validators.required],
      passingGrade: ['', Validators.required]
    });
  }

  addAnEducation() {
    (<FormArray>this.eduForm.get('education')).push(this.getAnEducation());
  }
  deleteAnEducation(index: number) {
    (<FormArray>this.eduForm.get('education')).removeAt(index);
  }

  onSubmit() {
    console.log(this.eduForm);
  }
}


// education: [{
//   qualification: String,
//   schoolName: String,
//   passingYear: String,
//   passingGrade: String
// }]