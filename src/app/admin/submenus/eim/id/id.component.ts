import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  idForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.idForm = this.fb.group({
      passportGroup: this.fb.group({
        passNum: [''],
        yearOfIssue: [''],
        yearOfExpiry: ['']
      }),
      otherIdentites: this.fb.group({
        idName: [''],
        idNum: ['']
      })
    });
  }

  onSubmit() {

  }
}
