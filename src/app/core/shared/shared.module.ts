import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PanelGeneratorComponent } from './panel-generator/panel-generator.component';
import { SidebarService } from './home/sidebar.service';
import { MatExpansionModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { GradeDirective } from './grade.directive';




@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule,
    MatCardModule
  ],
  declarations: [HomeComponent, PanelGeneratorComponent, NumbersOnlyDirective, GradeDirective],
  exports: [HomeComponent, NumbersOnlyDirective, GradeDirective],
  providers: [SidebarService]
})
export class SharedModule { }
