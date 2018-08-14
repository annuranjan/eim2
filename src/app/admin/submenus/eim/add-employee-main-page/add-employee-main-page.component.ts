import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppGuard } from '../../../../core/util/appGuard.service';
import { AddEmpService } from '../../../services/add-emp.service';

@Component({
  selector: 'app-add-employee-main-page',
  templateUrl: './add-employee-main-page.component.html',
  styleUrls: ['./add-employee-main-page.component.css']
})
export class AddEmployeeMainPageComponent implements OnInit, OnDestroy {

  routeLinks: any[];
  activeLinkIndex = -1;
  currentTab: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appGuard: AppGuard,
    private addEmpServ: AddEmpService
  ) {
    this.routeLinks = [
      {
        label: "Employee",
        link: './addEmployee',
        index: 0
      }, {
        label: 'Personal',
        link: './personal',
        index: 1
      }, {
        label: 'Company',
        link: './company',
        index: 2
      }, {
        label: 'Skills',
        link: './skills',
        index: 3
      }, {
        label: 'Experience',
        link: './experience',
        index: 4
      }, {
        label: 'Education',
        link: './education',
        index: 5
      }, {
        label: 'Family',
        link: './family',
        index: 6
      },
      {
        label: 'Id',
        link: './id',
        index: 7
      },
    ];
  }


  ngOnInit() {
    this.currentTab = 0;
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  navigateToPrevious() {
    if (this.appGuard.newEmpCreated === false)
      return;
    if (+this.currentTab === 0) {
      this.router.navigate(['./addEmployee'], { relativeTo: this.route });
    }
    else {
      this.currentTab--;
      this.router.navigate([this.routeLinks[this.currentTab]['link']], { relativeTo: this.route });
    }
  }

  navigateToNext() {
    debugger;
    if (this.appGuard.newEmpCreated === false)
      return;
    if (+this.currentTab === 7) {
      this.router.navigate(['./id'], { relativeTo: this.route });
    }
    else {
      this.currentTab++;
      this.router.navigate([this.routeLinks[this.currentTab]['link']], { relativeTo: this.route });
    }
  }

  setCurrentTab(index: number) {
    if (this.appGuard.newEmpCreated) {
      this.currentTab = index;
    }
  }
  // getEmpCreatedStatus() {
  //   return (this.appGuard.newEmpCreated || this.currentTab === 0);
  // }
  ngOnDestroy() {
    this.appGuard.newEmpCreated = false;
    this.addEmpServ.empDetailsObj.empId = undefined;
  }
}

