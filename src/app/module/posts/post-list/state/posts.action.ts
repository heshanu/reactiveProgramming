import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../../../../modal/posts.interface';

export const ADD_POST_ACTION = '[posts page] add post';
export const UPDATE_POST_ACTION = '[posts page] update post';
export const DELETE_POST_ACTION = '[posts page] delete post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: PostInterface }>());

export const updatePost = createAction(UPDATE_POST_ACTION, props<{ post: PostInterface }>());

export const deletePost = createAction(
    DELETE_POST_ACTION,
    props<{ id: any }>()
);
