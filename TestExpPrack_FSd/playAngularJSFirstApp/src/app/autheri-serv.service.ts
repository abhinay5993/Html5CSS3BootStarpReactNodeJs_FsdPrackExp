import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutheriServService {

  constructor() { }

  getMemberAuth()
  {
    //If user auherized the only make it true
    //add logic for validaing the user.
    return false;
  }
}
