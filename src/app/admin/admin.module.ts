import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { AdminComponent } from './admin.component';
import { SharedModule } from '../core/shared/shared.module';
import { ViewEmployeesComponent } from './submenus/eim/view-employees/view-employees.component';
import { AddEmployeeComponent } from './submenus/eim/add-employee/add-employee.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ContactPersonalDetailsComponent } from './submenus/eim/contact-personal-details/contact-personal-details.component';
import { AddEmployeeMainPageComponent } from './submenus/eim/add-employee-main-page/add-employee-main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './submenus/eim/personal/personal.component';
import { CompanyComponent } from './submenus/eim/company/company.component';
import { SkillsComponent } from './submenus/eim/skills/skills.component';
import { ExperienceComponent } from './submenus/eim/experience/experience.component';
import { EducationComponent } from './submenus/eim/education/education.component';
import { FamilyComponent } from './submenus/eim/family/family.component';
import { IdComponent } from './submenus/eim/id/id.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewEmployeesMainPageComponent } from './submenus/eim/view-employees-main-page/view-employees-main-page.component';
import { AaaaaaTestComponent } from './submenus/eim/aaaaaa-test/aaaaaa-test.component';
import { CreateUserComponent } from './submenus/eim/create-user/create-user.component';
import { AddEmpService } from './services/add-emp.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule
  ],
  declarations: [
    AdminComponent,
    ViewEmployeesComponent,
    AddEmployeeComponent,
    ContactPersonalDetailsComponent,
    AddEmployeeMainPageComponent,
    PersonalComponent,
    CompanyComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    FamilyComponent,
    IdComponent,
    AdminHomeComponent,
    ViewEmployeesMainPageComponent,
    AaaaaaTestComponent,
    CreateUserComponent
  ],
  providers: [AddEmpService]
})
export class AdminModule { }
