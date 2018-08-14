import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestBuilderService } from '../../../../core/util/request-builder.service';
import { AppGuard } from '../../../../core/util/appGuard.service';
import { AddEmpService } from '../../../services/add-emp.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  submittedSuccessfully;
  addEmpForm: FormGroup;
  fileUploaded: File;

  @ViewChild('fileInput') fileInput: ElementRef;

  usertypes: any[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'manager', viewValue: 'Manager' },
    { value: 'employee', viewValue: 'Employee' }
  ];
  constructor(
    private reqBuilder: RequestBuilderService,
    private appGuard: AppGuard,
    private cd: ChangeDetectorRef,
    private addEmpService: AddEmpService
  ) { }

  ngOnInit() {
    this.addEmpForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'middlename': new FormControl(null),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'usertype': new FormControl(null, Validators.required),
      'img': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.addEmpForm.value);
    // console.log(this.addEmpForm.value.img.value);

    const emp = {
      "firstname": this.addEmpForm.value.firstname,
      "middlename": this.addEmpForm.value.middlename,
      "lastname": this.addEmpForm.value.lastname,
      "email": this.addEmpForm.value.email,
      "usertype": this.addEmpForm.value.usertype,
      "img": this.addEmpForm.value.img
    };

    console.log(emp);

    this.reqBuilder.addAnEmp(emp).subscribe((emp) => {
      this.submittedSuccessfully = true;
      this.appGuard.newEmpCreated = true;
      console.log("response received...");
      console.log(emp);
      this.addEmpService.empDetailsObj.empId = emp.empId;
      console.log(this.addEmpService.empDetailsObj.empId);
    },
      (error) => {
        console.log(error);
      }
    );
  }

  // onFileChange(event) {
  //   let reader = new FileReader();
  //   if (event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.addEmpForm.get('img').patchValue({
  //         filename: file.name,
  //         filetype: file.type,
  //         value: reader.result.split(',')[1]
  //       });
  //       this.cd.markForCheck();
  //     };
  //   }
  // }''

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      // this.addEmpForm.patchValue({
      //   img: file
      // })
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.addEmpForm.get('img').patchValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
        // this.cd.markForCheck();
      };
    }
  }

  clearFile() {
    this.addEmpForm.get('img').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}

