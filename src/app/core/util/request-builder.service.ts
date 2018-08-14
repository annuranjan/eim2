import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { RequestDispatcherService } from "./request-dispatcher.service";

export interface Employee {
    firstname: string,
    middlename: string,
    lastname: string,
    email: string
    usertype: string
}

@Injectable()
export class RequestBuilderService {

    constructor(private reqDispatcher: RequestDispatcherService) { }

    base = "http://localhost:1101/";
    empBase = this.base + "employees/";
    emp

    //CRUD Operations Requests on employees
    getAllEmp(): Observable<any> {
        return this.reqDispatcher.get(this.empBase);
    }

    addAnEmp(body: Employee): Observable<any> {
        const url = this.empBase + "addemployee/";
        return this.reqDispatcher.post(url, body);
    }

    fetchAnEmp(empCode: number): Observable<any> {
        const url = this.empBase + empCode;
        return this.reqDispatcher.get(url);
    }

    updateAnEmp(empCode: number, body: Employee) {
        const url = this.empBase + empCode;
        return this.reqDispatcher.put(url, body);
    }

    removeAnEmp(empCode: number) {
        const url = this.empBase + empCode + "/delete";
        return this.reqDispatcher.put(url, {});
    }

    //Login Request
    login(username: string, password: string) {
        const url = this.base + "login/";
        return this.reqDispatcher.post(url, { username: username, password: password });
    }

    //CRUD Operations Requests on Employee Detials
    // router.post('/employees/:id/details', empDetails.addDetails);

    addEmpDetails(id: number, empDetails: Object): Observable<any> {
        const url = this.empBase + id + "/details";
        return this.reqDispatcher.post(url, empDetails);
    }

}