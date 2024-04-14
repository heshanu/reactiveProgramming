import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.status';
import { Observable } from 'rxjs';
import { PostsState } from './state/posts.state';
import { PostInterface } from '../../modal/posts.interface';
import { getPosts } from './state/posts.selector';
import { removePost, updatePost } from './state/posts.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  postList$!: Observable<PostInterface[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postList$ = this.store.select(getPosts);
  }
}
