import { Injectable } from '@angular/core';
import { RequestBuilderService } from '../../core/util/request-builder.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEmpService {

  empDetailsObj = {
    empId: "",
    personal: {
      dob: "",
      gender: "",
      nationality: "",
      bloodGroup: "",
      maritalStatus: "",
      category: "",
      religion: ""
    },
    contactDetails: {
      address: {
        address: "",
        city: "",
        state: "",
        pincode: ""
      },
      email: "",
      phone: ""
    },
    companyDetails: {
      employeeStatus: "",
      dateOfJoining: "",
      dateOfLeaving: "",
      dept: "",
      designation: "",
      salary: "",
      manager: {
        empId: ""
      }
    },
    skills: {
      language: "",
      trainings: ""
    },
    experience: "",
    education: "",
    familyAndEmergency: {
      family: "",
      emergency: "",
      nominee: ""
    },
    identificationDetails: {
      passport: {
        passNum: "",
        yearOfIssue: "",
        yearOfExpiry: ""
      },
      otherIdentites: ""
    }
  }

  constructor(
    private reqBuilder: RequestBuilderService
  ) { }

  submitEmpDetForm(EmpDetails: Object): Observable<any> {
    return this.reqBuilder.addEmpDetails(+this.empDetailsObj.empId, EmpDetails);
  }
}
