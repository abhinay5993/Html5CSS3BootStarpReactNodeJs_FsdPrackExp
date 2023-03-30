import { Component } from '@angular/core';
import { EmpservicesService } from 'src/app/empservices.service';

@Component({
  selector: 'app-signupreg',
  templateUrl: './signupreg.component.html',
  styleUrls: ['./signupreg.component.css'],
  providers:[EmpservicesService]
})
export class SignupregComponent {
  
  doNewUserSignUp(regFormData:any)
  {
    //console.log("\nForm Data : "+JSON.stringify(regFormData.value))
    this.empServObj.putUserRegisterDetailsToArrayStore(regFormData.value);
    console.log("\nUserName - "+regFormData.value.unName);
    console.log("\nUserName - "+regFormData.value.unEmailId) ;
    console.log("\nUserName - "+regFormData.value.newPwd);  
    console.log("\nUserName - "+regFormData.value.confPwd);        
  }

  getRegUsers()
  {
  console.log(this.empServObj.getRegisteredUsersDetails());
  return this.empServObj.getRegisteredUsersDetails();
  }

  constructor(private empServObj:EmpservicesService)
  {

  }

}