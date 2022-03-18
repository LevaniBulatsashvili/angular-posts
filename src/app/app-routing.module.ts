import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', loadChildren: () => import('./main-page/main-page.module').then(module => module.MainPageModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(module => module.UserModule) },
  { path: 'posts', loadChildren: () => import('./user-posts/user-posts.module').then(module => module.UserPostsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
