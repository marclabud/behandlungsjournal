import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthentificationService} from '../auth/authentification.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.checklogin();
  }
}
