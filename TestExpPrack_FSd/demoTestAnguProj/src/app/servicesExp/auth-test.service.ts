import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  constructor() { }

  loginFlag=false;
  loginUserAuth()
  {
    this.loginFlag=!this.loginFlag;
    return this.loginFlag;
  }
  
}