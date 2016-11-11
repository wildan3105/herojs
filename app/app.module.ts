// import angular js module
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppComponent }         from './app.component';

// import built in module
import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
    ],
  declarations: [
      AppComponent ,
      HeroDetailComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
