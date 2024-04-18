import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsState } from './state/posts.state';
import { getPosts } from './state/posts.selector';
import { deletePost, updatePost } from './state/posts.action';
import { PostInterface } from '../../../modal/posts.interface';
import { AppState } from '../../../store/app.status';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  postList$!: Observable<PostInterface[]>;

  constructor(private store: Store<AppState>) { }

  onDelete(id: any) {
    if (confirm("Are you sure want to delete")) {
      this.store.dispatch(deletePost({ id }));
    }

  }

  ngOnInit(): void {
    this.postList$ = this.store.select(getPosts);
  }
}
