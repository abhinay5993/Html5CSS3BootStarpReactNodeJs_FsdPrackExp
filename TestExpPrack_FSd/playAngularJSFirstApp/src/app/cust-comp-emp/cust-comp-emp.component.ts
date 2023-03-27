import { Component } from '@angular/core';
import { EmpservicesService } from '../empservices.service';

@Component({
  selector: 'app-cust-comp-emp',
  templateUrl: './cust-comp-emp.component.html',
  styleUrls: ['./cust-comp-emp.component.css'],
  providers:[EmpservicesService]
})
export class CustCompEmpComponent {
  numDat:number = -348.453;
  pushStr:string = "Hey!!.. Strings..!!..";
  empArr1:any[] = [{empId:101},{empName:"CaratLane"},{empSal:45000}];
  empArr2:any[] = [{empId:102},{empName:"TCS"},{empSal:20000}];
  
  empDataArr1:any[] = [];
  productArr1:any[] = [];
  simpArrayStat:any = [];

  printDataOfArray()
  {
    this.empDataArr1=this.empServObj.sendEmpDataInfo();
  }

  printProductDetails()
  {
    this.productArr1=this.empServObj.getProductDetails();
  }

  getUpdateArrayData()
  {
    this.simpArrayStat=this.empServObj.showMyArrayDataItems();
  }

  updateArrayData(loc1:any){
    this.empServObj.updateDataItemsIntoCustArr(loc1.value.Location);
  }

  constructor(private empServObj:EmpservicesService)
  {

  }

}
