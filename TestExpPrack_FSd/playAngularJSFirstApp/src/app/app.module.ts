import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustCompEmpComponent } from './cust-comp-emp/cust-comp-emp.component';
import { TempletTestDrivenFormComponent } from './templet-test-driven-form/templet-test-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustCompEmpComponent,
    TempletTestDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
