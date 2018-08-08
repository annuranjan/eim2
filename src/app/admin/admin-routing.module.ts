import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ViewEmployeesComponent } from "./submenus/eim/view-employees/view-employees.component";
import { AddEmployeeMainPageComponent } from "./submenus/eim/add-employee-main-page/add-employee-main-page.component";
import { PersonalComponent } from "./submenus/eim/personal/personal.component";
import { CompanyComponent } from "./submenus/eim/company/company.component";
import { SkillsComponent } from "./submenus/eim/skills/skills.component";
import { ExperienceComponent } from "./submenus/eim/experience/experience.component";
import { EducationComponent } from "./submenus/eim/education/education.component";
import { FamilyComponent } from "./submenus/eim/family/family.component";
import { IdComponent } from "./submenus/eim/id/id.component";
import { AddEmployeeComponent } from "./submenus/eim/add-employee/add-employee.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { ViewEmployeesMainPageComponent } from "./submenus/eim/view-employees-main-page/view-employees-main-page.component";
import { AppGuard } from "../core/util/appGuard.service";
import { CreateUserComponent } from "./submenus/eim/create-user/create-user.component";
// import { AaaaaaTestComponent } from "./submenus/eim/aaaaaa-test/aaaaaa-test.component";

const adminRoutes: Routes = [
    {
        path: "admin", component: AdminComponent, children: [
            { path: "", component: AdminHomeComponent },
            {
                path: "viewEmployees", component: ViewEmployeesMainPageComponent, children: [
                    // { path: "", component: AaaaaaTestComponent }
                    { path: "", component: ViewEmployeesComponent }
                ]
            },
            { path: "createUser", component: CreateUserComponent },
            {
                path: "addEmployee", component: AddEmployeeMainPageComponent, children: [
                    { path: "", redirectTo: "addEmployee", pathMatch: "full" },
                    { path: "addEmployee", component: AddEmployeeComponent },
                    { path: "personal", component: PersonalComponent, canActivate: [AppGuard] },
                    { path: "company", component: CompanyComponent, canActivate: [AppGuard] },
                    { path: "skills", component: SkillsComponent, canActivate: [AppGuard] },
                    { path: "experience", component: ExperienceComponent, canActivate: [AppGuard] },
                    { path: "education", component: EducationComponent, canActivate: [AppGuard] },
                    { path: "family", component: FamilyComponent, canActivate: [AppGuard] },
                    { path: "id", component: IdComponent, canActivate: [AppGuard] },
                ]
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }