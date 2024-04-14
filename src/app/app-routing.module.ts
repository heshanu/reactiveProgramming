import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { CounterOutputComponent } from './comp/counter/counter-output/counter-output.component';
import { HomeComponent } from './home/home.component';
//import { PostListComponent } from './posts/post-list/PostListComponent';
import { CountComponent } from './count/count.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent }]
  },
  {
    path: 'counter',
    component: CountComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
