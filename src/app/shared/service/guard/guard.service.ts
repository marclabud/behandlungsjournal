import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthentificationService} from '../auth/authentification.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private auth: AuthentificationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;
    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
