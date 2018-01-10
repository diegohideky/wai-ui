import { NgModule}              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }       from './login/login.component';
import { SigninComponent }      from './signin/signin.component';
import { AdminComponent }       from './admin/admin.component';
import { UserComponent }        from './user/user.component';
import { HomeComponent }        from './home/home.component';
import { ColaborateComponent }  from './colaborate/colaborate.component';
import { ConsultComponent }     from './consult/consult.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'colaborate', component: ColaborateComponent },
  { path: 'consult', component: ConsultComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
