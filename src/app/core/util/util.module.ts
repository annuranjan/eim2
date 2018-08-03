import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDispatcherService } from './request-dispatcher.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RequestDispatcherService]
})
export class UtilModule { }
