import { Component } from '@angular/core';
import { EmpservicesService } from 'src/app/empservices.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers:[EmpservicesService]
})
export class UserdetailsComponent {

  getListOfRegisteredUsers()
  {
  console.log(this.empServObj.getRegisteredUsersDetails());
  return this.empServObj.getRegisteredUsersDetails();
  }

  constructor(private empServObj:EmpservicesService)
  {

  }
  
}