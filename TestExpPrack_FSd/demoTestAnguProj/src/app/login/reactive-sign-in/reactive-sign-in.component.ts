import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-sign-in',
  templateUrl: './reactive-sign-in.component.html',
  styleUrls: ['./reactive-sign-in.component.css'],
})
export class ReactiveSignInComponent {
  logState: string = " ";
  constructor(private router: Router) {}

  form = new FormGroup({
    emailId: new FormControl('',Validators.compose([Validators.required, Validators.email])),
    pwd: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(4)])),
  });

  authenticateSignInUser(): void {
    if (localStorage.length !== 0) {
      for (let i = 0; i < localStorage.length; i++) {
        let lsEmalVal = localStorage.getItem('emailId');
        let lsPwdVal = localStorage.getItem('confPwd');
        if (
          lsEmalVal === `${this.form.value.emailId}` &&
          lsPwdVal === `${this.form.value.pwd}`
        ) {
          this.router.navigate(['/home']);
        } else {
         this.logState ="User not registered!!..";
         break;
        }
      }
    } else {
      this.logState ="Invalid!! user..";
    }
  }

  reset() {
    this.form.reset();
  }
}
