import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheriServService } from './autheri-serv.service';
import { AuthgaurdGuard } from './authgaurd.guard';
import { LoginsignComponent } from './custbootstrscomps/loginsign/loginsign.component';
import { MainpageComponent } from './custbootstrscomps/mainpage/mainpage.component';
import { SignupregComponent } from './custbootstrscomps/signupreg/signupreg.component';
import { UserdetailsComponent } from './custbootstrscomps/userdetails/userdetails.component';
import { ClrhomeComponent } from './routergard/clrhome/clrhome.component';
import { MemberdetailsComponent } from './routergard/memberdetails/memberdetails.component';

const routes: Routes = [ {path:'logIn', component:LoginsignComponent}, 
                         {path:'signUp', component:SignupregComponent},
                         {path:'home', component:MainpageComponent},
                         {path:'showdetails', component:UserdetailsComponent},
                         {path:'clrhomepg', component:ClrhomeComponent},
                         {path:'clrmemberdetails', component:MemberdetailsComponent,canActivate:[AuthgaurdGuard]},
                         {path:'**', component:LoginsignComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
