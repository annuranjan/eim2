import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeyValuePipe } from '../../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  employeename$: Observable<any>;
  userForm: FormGroup;
  user: { empId: number, username: string, password: string, passwordConf: string, usertype: string }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {

  }

}

// @HostListener('keydown', ['$event'])
// onKeyDown(event: KeyboardEvent) {
//   if (this.specialKeys.indexOf(event.key) !== -1) {
//     return;
//   }
//   let current: string = this.el.nativeElement.value;
//   let next: string = current.concat(event.key);
//   if (next && !String(next).match(this.regex)) {
//     event.preventDefault();
//   }
// }

// empId: {
//   type: Number,
//   index: true,
//   unique: true,
//   required: true
// },
// username: String,
// password: String,
// usertype: String