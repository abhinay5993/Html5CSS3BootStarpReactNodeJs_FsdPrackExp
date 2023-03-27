import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpservicesService {

  arrDataItems:any[] =[];
  empServArr:any[] = [ {empId:101,empName:"CaratLane",empSal:45000}, 
                    {empId:102,empName:"ITC",empSal:387484},
                    {empId:103,empName:"Cog",empSal:348474},
                    {empId:104,empName:"google",empSal:349849} 
                  ];

  sendEmpDataInfo()
  {
    return this.empServArr;
  }

  productArrays1:any[] = [ {sku:"kk1",prodName:"Rings!",price:"25k"}, 
  {sku:"p2",prodName:"Earrings!",price:"10k"},
  {sku:"UGKk1",prodName:"GoldCoins",price:"5k"}];

  getProductDetails()
  {
    return this.productArrays1;
  }

  updateDataItemsIntoCustArr(strVal:any)
  {
    this.arrDataItems.push(strVal);
  }

  showMyArrayDataItems()
  {
    return this.arrDataItems;
  }

  constructor() { }
}
