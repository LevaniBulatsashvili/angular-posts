import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsComponent } from './user-posts.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserPostsComponent }]),
    MaterialModule
  ]
})
export class UserPostsModule { }
