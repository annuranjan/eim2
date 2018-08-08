import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AppGuard implements CanActivate {

    newEmpCreated: boolean = false;
    // newEmpCreated: boolean = true;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.newEmpCreated;
    }

}