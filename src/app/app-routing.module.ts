import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

import { HomeComponent } from './home/home.component';
//import { PostListComponent } from './posts/post-list/PostListComponent';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts',
    loadChildren: () => import("./module/posts/posts.module").then(m => m.PostsModule)
    // component: PostListComponent,
    // children: [
    //   { path: 'add', component: AddPostComponent },
    //   { path: 'edit/:id', component: EditPostComponent },
    // ]
  },
  {
    path: 'counter',
    loadChildren:
      () => import("./module/counter/counter.module").then(m => m.CounterModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
