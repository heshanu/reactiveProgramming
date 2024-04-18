import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'add', component: AddPostComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: 'delete/:id', component: DeletePostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
