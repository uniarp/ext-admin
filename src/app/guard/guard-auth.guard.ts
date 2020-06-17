import { LoginService } from './../login-admin/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.loginService.getAuth().onAuthStateChanged(user => {
        if (!user) { this.router.navigate(['login-admin']); }

        resolve(user ? true : false);
      });
    });
  }
}
