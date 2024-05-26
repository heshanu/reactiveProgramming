import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../../../../modal/posts.interface';

export const ADD_POST_ACTION = '[posts page] add post';
export const ADD_POST_SUCCESS = '[posts page] add post success';

export const UPDATE_POST_ACTION = '[posts page] update post';
export const UPDATE_POST_SUCCESS = '[posts page] update post success';

export const DELETE_POST_ACTION = '[posts page] delete post';
export const DELETE_POST_SUCCESS = '[posts page] delete post success';

export const LOAD_POSTS_ACTION = '[posts page] load posts';
export const LOAD_POST_SUCCESS= '[posts page] load posts success';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: PostInterface }>());

export const addPostSuccess = createAction(
    ADD_POST_SUCCESS,
    props<{ post: PostInterface }>()
  );

export const updatePost = createAction(UPDATE_POST_ACTION, props<{ post: PostInterface }>());
export const updatePostSuccess = createAction(
  UPDATE_POST_SUCCESS,
  props<{ post: PostInterface }>()
);

export const deletePost = createAction(
    DELETE_POST_ACTION,
    props<{ id: any }>()
);
export const deletePostSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{ id: string }>()
);

export const loadPosts=createAction(LOAD_POSTS_ACTION);
export const loadPostsSuccess=createAction(LOAD_POST_SUCCESS
    ,props<{posts:PostInterface[]}>());

