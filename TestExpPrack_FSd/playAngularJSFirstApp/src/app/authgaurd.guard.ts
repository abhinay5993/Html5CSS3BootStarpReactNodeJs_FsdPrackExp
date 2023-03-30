import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutheriServService } from './autheri-serv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {

  constructor(private authServObj: AutheriServService)
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authServObj.getMemberAuth())
    {
    console.log('AutheriServService.ts service is returning True');
    return true;
    }
    else
    {
    console.log('AutheriServService.ts service is returning False');
    alert('unAutherized User!!..')
    return false;
    }
  }
  
}
