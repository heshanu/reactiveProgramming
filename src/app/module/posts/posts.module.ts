import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post-list/state/posts.reducer';
import { POST_STATE_NAME } from './post-list/state/posts.selector';


@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    DeletePostComponent,
    EditPostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    StoreModule.forFeature(POST_STATE_NAME, postReducer)
  ]
})
export class PostsModule { }
