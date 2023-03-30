import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lgFrm=new FormGroup({ user:new FormControl('',[Validators.required,Validators.email]),
            password:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(8)])
  });

  logIn()
  {
    console.log(this.lgFrm);
  }

  get user()
  {
    return this.lgFrm.get('user');
  }

  get password()
  {
    return this.lgFrm.get('password');
  }

}
