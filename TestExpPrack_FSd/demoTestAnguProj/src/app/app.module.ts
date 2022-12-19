import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { SignUpLoginComponent } from './sign-up-login/sign-up-login.component';
import { ProductsComponent } from './products/products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { DemoRountComponent } from './demo-rount/demo-rount.component';
import { ClprodComponent } from './products/clprod/clprod.component';
import { ShyaprodComponent } from './products/shyaprod/shyaprod.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthTestService } from './servicesExp/auth-test.service';
import { ReactiveLoginComponent } from './sign-up-login/reactive-login/reactive-login.component';
import { ReactiveSignInComponent } from './login/reactive-sign-in/reactive-sign-in.component';
import { FormsModloginComponent } from './login/forms-modlogin/forms-modlogin.component';
import { UnitTestSuiteComponent } from './unit-test-suite/unit-test-suite.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLayoutComponent,
    SignUpLoginComponent,
    ProductsComponent,
    HomePageComponent,
    LoginComponent,
    DemoRountComponent,
    ClprodComponent,
    ShyaprodComponent,
    ReactiveLoginComponent,
    ReactiveSignInComponent,
    FormsModloginComponent,
    UnitTestSuiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
