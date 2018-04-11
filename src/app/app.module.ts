import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/misc/nav-bar/nav-bar.component';
import { routes } from './app.routes';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';

import { SessionService } from './shared/services/session.service';
import { UsersService } from './shared/services/users.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignupComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsersService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
