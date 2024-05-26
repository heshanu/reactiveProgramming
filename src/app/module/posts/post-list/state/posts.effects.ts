import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { PostsService } from '../../../../service/posts.service';
import { loadPosts, loadPostsSuccess, addPost, addPostSuccess, updatePost, updatePostSuccess, deletePost, deletePostSuccess } from './posts.action';
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
  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postsService.updatePost(action.post).pipe(
          map((data) => {
            return updatePostSuccess({ post: action.post });
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postsService.deletePost(action.id).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({status:false}));
            return deletePostSuccess({ id: action.id });

          })
        );
      })
    );
  });

}
