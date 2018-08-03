import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  eduForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}


education: [{
  qualification: String,
  schoolName: String,
  passingYear: String,
  passingGrade: String
}]