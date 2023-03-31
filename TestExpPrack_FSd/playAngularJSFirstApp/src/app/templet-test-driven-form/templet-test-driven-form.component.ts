import { Component } from '@angular/core';

@Component({
  selector: 'app-templet-test-driven-form',
  templateUrl: './templet-test-driven-form.component.html',
  styleUrls: ['./templet-test-driven-form.component.css']
})
export class TempletTestDrivenFormComponent {

  doLogInByUnamePass(lgFormDat:any)
  {
    console.log("Log Data - "+JSON.stringify(lgFormDat.value));
    document.writeln("<br>Request Data : </br>");
    document.writeln("<b></b>"+JSON.stringify(lgFormDat.value));
    let usernameVal:String = lgFormDat.value.unName;
    let passVal:String = lgFormDat.value.pwd;
    if(usernameVal==="admin" && passVal==="pass123")
    {
      document.writeln("<br></br>");
      document.writeln("<br>Hey!!.. Login Success!!..</br>");
    }
    else
    {
      document.writeln("<br></br>");
      document.writeln("<b><i>User is not Registered!!..</b></i>");
    }
  }

  constructor()
  {

  }
}
