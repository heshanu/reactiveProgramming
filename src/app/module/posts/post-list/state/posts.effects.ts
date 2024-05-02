import { map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { PostsService } from '../../../../service/posts.service';
import { loadPosts, loadPostsSuccess, addPost, addPostSuccess } from './posts.action';
import { setLoadingSpinner } from '../../../../store/shared.actions';
import { SharedState } from '../../../../store/shared.state';
import { Store } from '@ngrx/store';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions,
    private postsService: PostsService,private store: Store<SharedState>) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.postsService.getPosts().pipe(
          map((posts) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loadPostsSuccess({ posts });
          })
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id:data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });
}
