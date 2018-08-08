import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./core-components/login/login.component";
import { AdminComponent } from "../admin/admin.component";
import { AdminModule } from "../admin/admin.module";
import { NgModule } from "@angular/core";

const coreRoutes: Routes = [
    // { path: "", pathMatch: "full", redirectTo: "login" },
    { path: "login", component: LoginComponent },
    { path: "admin", component: AdminComponent, loadChildren: () => AdminModule },
    //FLAG - Put a route for not found here.
];

@NgModule({
    imports: [RouterModule.forRoot(coreRoutes)],
    exports: [RouterModule]
})

export class CoreRoutingModule { }