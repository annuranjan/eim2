import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PanelGeneratorComponent } from './panel-generator/panel-generator.component';
import { SidebarService } from './home/sidebar.service';
import { MatExpansionModule } from '@angular/material';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NumbersOnlyDirective } from './numbers-only.directive';



@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule,
    MatCardModule
  ],
  declarations: [HomeComponent, PanelGeneratorComponent, NumbersOnlyDirective],
  exports: [HomeComponent, NumbersOnlyDirective],
  providers: [SidebarService]
})
export class SharedModule { }
