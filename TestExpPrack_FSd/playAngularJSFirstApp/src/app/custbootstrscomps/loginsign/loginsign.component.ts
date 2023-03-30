import { Component } from '@angular/core';
import { EmpservicesService } from 'src/app/empservices.service';

@Component({
  selector: 'app-loginsign',
  templateUrl: './loginsign.component.html',
  styleUrls: ['./loginsign.component.css'],
  providers:[EmpservicesService]
})
export class LoginsignComponent {

  doExistingUsersLogIn(signInLog:any)
  {
    console.log("Log Data - "+JSON.stringify(signInLog.value));
    document.writeln("<br>Request Data : </br>");
    document.writeln("<b></b>"+JSON.stringify(signInLog.value));
    let usernameVal:String = signInLog.value.unEmailId;
    let passVal:String = signInLog.value.confPwd;
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

  constructor(private empServObj:EmpservicesService)
  {

  }
  
}
