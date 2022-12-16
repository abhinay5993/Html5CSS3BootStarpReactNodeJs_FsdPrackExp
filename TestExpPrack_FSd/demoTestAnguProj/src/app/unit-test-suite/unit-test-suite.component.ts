import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-test-suite',
  templateUrl: './unit-test-suite.component.html',
  styleUrls: ['./unit-test-suite.component.css']
})
export class UnitTestSuiteComponent {

  btnClick():void
  {
    console.log('LOGIN button clicked!!..');
  }
}
