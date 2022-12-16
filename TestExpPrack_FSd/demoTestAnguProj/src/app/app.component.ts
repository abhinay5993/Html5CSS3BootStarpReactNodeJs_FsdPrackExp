import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

parentHelperMeth(as:string):void {
console.log('I am!! in Parent App Component..',as);
}

  title = 'FronEnd_Angular';
  pushApp='SDET ITC-Info'
  dtBoj=new Date();
  arrayJsOb:any=[{"key":45,"val":"CaratLane"},
            {"key":40,"val":"Java"}
          ];
  sal:number=345.2883;
  inpNo:number=3;
  showDateMsg():void
  {
    alert("Time is : "+this.dtBoj);
    this.inpNo=2;
  }

  setValueIntoLocalStoreOfBrowser():void
  {
    let uuid = require("uuid");
    localStorage.setItem('JWT',uuid.v4());
    localStorage.setItem('userName',"SDET-QA_Auto");
    localStorage.setItem('pwd',"(@*$(@*($*$(($)))))");
    localStorage.setItem('lang',"TypeScript");
    alert("data save!!..");
  }

  getLocalStroreValues():void
  {
    for(let i=0;i<localStorage.length;i++)
    {
      let key=localStorage.key(i);
      document.writeln(key+"<===>"+localStorage.getItem(`${key}`));
      document.writeln("<br>");
    }
   }

}
