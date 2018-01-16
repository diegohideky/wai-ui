import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule }            from '@angular/core';
import { HttpModule }          from '@angular/http';

import { AppRoutingModule }    from './app-routing.module';

import { AppComponent }        from './app.component';
import { HomeComponent }       from './home/home.component';
import { HeaderComponent }     from './header/header.component';
import { FooterComponent }     from './footer/footer.component';
import { LoginComponent }      from './login/login.component';
import { SignupComponent }     from './signup/signup.component';
import { AdminComponent }      from './admin/admin.component';
import { UserComponent }       from './user/user.component';
import { SchoolComponent }     from './school/school.component';
import { ColaborateComponent } from './colaborate/colaborate.component';
import { ConsultComponent }    from './consult/consult.component';
import { QuestionComponent } from './question/question.component';

import { ApiService }          from './api/api.service';
import { CepService }          from './api/cep.service';
import { LoginService }        from './login/login.service';
import { SignupService }       from './signup/signup.service';
import { AdminService }        from './admin/admin.service';
import { SchoolService }       from './school/school.service';
import { QuestionService }     from './question/question.service';

@NgModule({
  // Components
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    UserComponent,
    ColaborateComponent,
    ConsultComponent,
    SchoolComponent,
    QuestionComponent
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
    CepService,
    LoginService,
    SignupService,
    AdminService,
    SchoolService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
