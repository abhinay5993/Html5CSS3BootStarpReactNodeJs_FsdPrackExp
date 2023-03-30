import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustCompEmpComponent } from './cust-comp-emp/cust-comp-emp.component';
import { TempletTestDrivenFormComponent } from './templet-test-driven-form/templet-test-driven-form.component';
import { NavbarComponent } from './custbootstrscomps/navbar/navbar.component';
import { MainpageComponent } from './custbootstrscomps/mainpage/mainpage.component';
import { FootersecComponent } from './custbootstrscomps/footersec/footersec.component';
import { LoginsignComponent } from './custbootstrscomps/loginsign/loginsign.component';
import { SignupregComponent } from './custbootstrscomps/signupreg/signupreg.component';
import { UserdetailsComponent } from './custbootstrscomps/userdetails/userdetails.component';
import { TempletdriveformsexpComponent } from './custbootstrscomps/templetdriveformsexp/templetdriveformsexp.component';
import { ClrhomeComponent } from './routergard/clrhome/clrhome.component';
import { MemberdetailsComponent } from './routergard/memberdetails/memberdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CustCompEmpComponent,
    TempletTestDrivenFormComponent,
    NavbarComponent,
    MainpageComponent,
    FootersecComponent,
    LoginsignComponent,
    SignupregComponent,
    UserdetailsComponent,
    TempletdriveformsexpComponent,
    ClrhomeComponent,
    MemberdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
