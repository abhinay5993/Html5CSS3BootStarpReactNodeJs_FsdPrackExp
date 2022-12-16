import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css'],
})
export class ReactiveLoginComponent {

  regState:string='';
  form = new FormGroup({
    emailId: new FormControl('',Validators.compose([Validators.required, Validators.email])),
    mobile: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10)])),
    pwd: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(4)])),
    confPwd: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(4)]))
  });

  setRegisterDataValueIntoLSOfBrowser(): void {
      localStorage.setItem('emailId',`${this.form.value.emailId}`);
      localStorage.setItem('mobileNo',`${this.form.value.mobile}`);
      localStorage.setItem('pwd', `${this.form.value.pwd}`);
      if (`${this.form.value.pwd}`=== `${this.form.value.confPwd}`) {
        localStorage.setItem('confPwd', `${this.form.value.confPwd}`);
        this.regState='Registered Success!!..';
      } else {
        this.regState='Re-Typed Password Not!! Same..';
        localStorage.clear();
      }
  }

  reset() {
    this.form.reset();
    localStorage.clear();
  }
  
}