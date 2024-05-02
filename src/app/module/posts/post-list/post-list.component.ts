import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsState } from './state/posts.state';
import { getPosts } from './state/posts.selector';
import { deletePost, loadPosts, updatePost } from './state/posts.action';
import { PostInterface } from '../../../modal/posts.interface';
import { AppState } from '../../../store/app.status';
import { setLoadingSpinner } from '../../../store/shared.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.postList$ = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
    //this.store.dispatch(setLoadingSpinner({status:false}));
  }
  postList$!: Observable<PostInterface[]>;
 
  onDelete(id: any) {
    if (confirm("Are you sure want to delete")) {
      this.store.dispatch(deletePost({ id }));
    }
  }




  
}
