import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-rount',
  templateUrl: './demo-rount.component.html',
  styleUrls: ['./demo-rount.component.css']
})
export class DemoRountComponent {

constructor(private route: ActivatedRoute)
{

}
  idVal=this.route.snapshot.paramMap.get('id');
  nameVal=this.route.snapshot.paramMap.get('name');
}
