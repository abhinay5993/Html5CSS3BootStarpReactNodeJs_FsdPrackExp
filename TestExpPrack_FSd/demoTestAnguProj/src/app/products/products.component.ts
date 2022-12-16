import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient)
  {
  
  }

  navigateToCaratLane()
  {
    this.router.navigate(['clrprod'],{relativeTo:this.route});
    let call=this.http.get('https://api.publicapis.org/entries');
    call.subscribe((data:any)=>
      { console.log('Response Data - ',data) }
      );
  }

  navigateToShaya(): void
  {
    this.router.navigate(['shayaSilver'],{relativeTo:this.route})
  }

}