import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';

import { AdminModule } from '../admin/admin.module';
import { ManagerModule } from '../manager/manager.module';
import { EmployeeModule } from '../employee/employee.module';
import { LoginComponent } from './core-components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { UtilModule } from './util/util.module';
import { RequestBuilderService } from './util/request-builder.service';
import { AppGuard } from './util/appGuard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    //Application Mdoules
    AdminModule,
    EmployeeModule,
    ManagerModule,
    SharedModule,
    CoreRoutingModule,
    UtilModule
    //Third Party Modules

  ],
  declarations: [LoginComponent],
  providers: [RequestBuilderService, AppGuard]
})
export class CoreModule { }
