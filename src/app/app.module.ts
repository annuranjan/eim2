// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './core/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    //Application Modules
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
