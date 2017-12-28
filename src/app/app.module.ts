import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';
import { HomeComponent }    from './home/home.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { LoginComponent }   from './login/login.component';
import { SigninComponent }  from './signin/signin.component';
import { AdminComponent }   from './admin/admin.component';
import { UserComponent }    from './user/user.component';

import { ApiService }       from './api/api.service';
import { LoginService }     from './login/login.service';
import { SigninService }    from './signin/signin.service';
import { AdminService }     from './admin/admin.service';

@NgModule({
  // Components
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    AdminComponent,
    UserComponent
  ],
  // Dependences
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // Services
  providers: [
    ApiService,
    LoginService,
    SigninService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
