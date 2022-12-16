import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shyaprod',
  templateUrl: './shyaprod.component.html',
  styleUrls: ['./shyaprod.component.css'],
})

export class ShyaprodComponent {
  form = new FormGroup({
    firstName: new FormControl('',Validators.compose([Validators.required, Validators.minLength(3)])),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log('reactive form submitted');
    console.log(this.form.value);
  }
  reset() {
    this.form.reset();
  }
}