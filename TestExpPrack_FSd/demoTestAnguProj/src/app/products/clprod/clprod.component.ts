import { Component } from '@angular/core';
import { AuthTestService } from 'src/app/servicesExp/auth-test.service';

@Component({
  selector: 'app-clprod',
  templateUrl: './clprod.component.html',
  styleUrls: ['./clprod.component.css']
})
export class ClprodComponent {

  constructor(public servAuth:AuthTestService)
  {

  }

  doServiceCallFromAuth():void
  {
    console.log('Flag Value - ',this.servAuth.loginFlag);
    console.log('New Flag Val - ',this.servAuth.loginUserAuth());
  }
  
}
