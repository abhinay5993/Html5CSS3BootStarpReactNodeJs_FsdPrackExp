import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css'],
})
export class SignUpLoginComponent {
  
  @Output() childMeth:EventEmitter<string>=new EventEmitter();
  testName:string="Hey!! i am in Child!!";

  btnClick():void
  {
    console.log('Child btnClick call..');
    this.childMeth.emit(this.testName);
  }

  @Input("test") arrObj:any;
  
  setRegisterDataValueIntoLSOfBrowser(uname: any,email: any,mobileNo: any,pwd: any,rePwd: any): void {
    if (uname.value !== "" && email.value !== "" && mobileNo.value !== "" && pwd.value !== "" && rePwd.value !== "") 
    {
      localStorage.setItem('userName', uname.value);
      localStorage.setItem('emailId', email.value);
      localStorage.setItem('mobileNo', mobileNo.value);
      localStorage.setItem('pwd', pwd.value);
      if (pwd.value === rePwd.value) {
        localStorage.setItem('confPwd', rePwd.value);
        alert('Registered Success!!..');
      } else {
        alert('Re-Typed Password Not Same..');
        localStorage.clear();
      }
    } else {
      alert('all!! fields required..');
      localStorage.clear();
    }
  }
}