import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-modlogin',
  templateUrl: './forms-modlogin.component.html',
  styleUrls: ['./forms-modlogin.component.css']
})
export class FormsModloginComponent {

  constructor() { }

  user:any={};

  onSubmitTemplateBased(data:any) {
    console.log(data.value.firstName);
    console.log(data.value);
  }

}