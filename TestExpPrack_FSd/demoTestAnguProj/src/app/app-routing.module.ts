import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoRountComponent } from './demo-rount/demo-rount.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModloginComponent } from './login/forms-modlogin/forms-modlogin.component';
import { LoginComponent } from './login/login.component';
import { ReactiveSignInComponent } from './login/reactive-sign-in/reactive-sign-in.component';
import { ClprodComponent } from './products/clprod/clprod.component';
import { ProductsComponent } from './products/products.component';
import { ShyaprodComponent } from './products/shyaprod/shyaprod.component';
import { ReactiveLoginComponent } from './sign-up-login/reactive-login/reactive-login.component';
import { SignUpLoginComponent } from './sign-up-login/sign-up-login.component';

const routes: Routes = [
  {
    path: 'register',
    component: SignUpLoginComponent,
  },
  {
    path: 'templateDriveForm-login',
    component: FormsModloginComponent,
  },
  {
    path: '',
    component: ReactiveLoginComponent,
  },
  {
    path: 'reactive-signin',
    component: ReactiveSignInComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'pdDetails',
    component: ProductsComponent,
    children: [
      { path: 'clrprod', component: ClprodComponent },
      { path: 'shayaSilver', component: ShyaprodComponent }
    ],
  },
  {
    path: 'demoUriWithParam/:id/:name',
    component: DemoRountComponent,
  },
  {
    path: '**',
    component: SignUpLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
