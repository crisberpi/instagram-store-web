import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/misc/nav-bar/nav-bar.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
