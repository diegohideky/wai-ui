import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';
import { HomeComponent }    from './home/home.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';

@NgModule({
  // Components
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  // Dependencies
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // Services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
