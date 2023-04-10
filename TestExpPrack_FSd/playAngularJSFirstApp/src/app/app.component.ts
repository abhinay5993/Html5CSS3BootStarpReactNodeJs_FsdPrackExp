import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  twoTsWayValx:string | undefined;
  propVarfromCompTs:string ="caratLane-ITC"
  switchFlagVar:boolean = false;
  numVar:string = "34.30400000000000000";
  negVar:string = "-3.30";
  curencyVarX:string = "877.88";
  perCentVarx:string = "74.34";
  switchTestExprVal:number | undefined;
  strDate=new Date();
  strVarx:string="Welcome to Pipes!!";
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

  doClearVal()
  {
    this.twoTsWayValx="0";
  }

  getCssClassVal(num:any)
  {
    if(num<=10)
    {
      return 'primary';
    }
    else
    {
      return 'second';
    }
  }

}
