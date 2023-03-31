import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversetestcustpipe'
})
export class ReversetestcustpipePipe implements PipeTransform {

  //applicable for overriding/implementation
  strCustVarx!: string;
  transform(value:any,...args:unknown[]): unknown {
    this.strCustVarx=value.split('').reverse().join(',');
    return this.strCustVarx;
  }

}
