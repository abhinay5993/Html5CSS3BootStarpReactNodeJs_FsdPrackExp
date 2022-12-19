import { Component } from '@angular/core';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent {
  num:number=37;
  colorName:string="green";
  size:number=50;
  getEmpData():any[]
  {
    let empDatArr=[
                  {id:1,firstName:"Atif",lastName:"Aslam",designation:"FullStack-Dev",mobileNo:"+91-9566089853",email:"addez@info.com"},
                  {id:2,firstName:"Abhi",lastName:"Lun",designation:"Backend-Dev",mobileNo:"+91-9500020063",email:"abhi5993@gmail.com"},
                  {id:3,firstName:"Karan",lastName:"Das",designation:"Java-Dev",mobileNo:"+91-8006089823",email:"kk@live.com"},
                  {id:4,firstName:"Riya",lastName:"C",designation:"QA-Automation SDET",mobileNo:"+91-9569990066",email:"anishDev@dev.io"},
                  {id:5,firstName:"Guru",lastName:"G",designation:"DevOps",mobileNo:"+91-7566083850",email:"guru@caratLane.com"}
                  ];

    return empDatArr;
  }

  showDataIntoAlert(dat:any):void
  {
    alert('Hello There - '+dat.value);
  }

  setColour(dat:any):void
  {
    this.colorName=dat.value;
  }

  setSize(dat:any):void
  {
    this.size=dat.value;
  }

}