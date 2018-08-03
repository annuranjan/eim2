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

const adminRoutes: Routes = [
    {
        path: "admin", component: AdminComponent, children: [
            { path: "", component: AdminHomeComponent },
            { path: "viewEmployees", component: ViewEmployeesComponent },
            {
                path: "addEmployee", component: AddEmployeeMainPageComponent, children: [
                    { path: "", redirectTo: "addEmployee", pathMatch: "full" },
                    { path: "addEmployee", component: AddEmployeeComponent },
                    { path: "personal", component: PersonalComponent },
                    { path: "company", component: CompanyComponent },
                    { path: "skills", component: SkillsComponent },
                    { path: "experience", component: ExperienceComponent },
                    { path: "education", component: EducationComponent },
                    { path: "family", component: FamilyComponent },
                    { path: "id", component: IdComponent },
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