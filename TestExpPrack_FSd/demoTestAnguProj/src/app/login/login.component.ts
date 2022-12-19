import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router)
  {
  
  }

   authenticateLogInUser(email: any,pwd: any): void {
    if (email.value !== "" && pwd.value !== "") 
    {
    for(let i=0;i<localStorage.length;i++)
    {
      let lsEmalVal=localStorage.getItem("emailId");
      let lsPwdVal=localStorage.getItem("confPwd");
      if(lsEmalVal===email.value && lsPwdVal===pwd.value)
      {
        this.router.navigate(['/home']);
      }
      else{
        alert('User not registered!!..');
        break;
      }
    }
    } else {
      alert('credentails are Empty!!..');
    }
  }

}
