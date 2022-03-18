import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainPageComponent }]),
    MaterialModule
  ]
})
export class MainPageModule { }
