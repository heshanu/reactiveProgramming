import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../../../modal/posts.interface';


export const ADD_POST_ACTION = '[posts page] add post';
export const UPDATE_POST_ACTION = '[posts page] update post';


export const REMOVE_POST_ACTION = '[posts page] remove post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: PostInterface }>());

export const updatePost = createAction(UPDATE_POST_ACTION, props<{ post: PostInterface }>());

export const removePost = createAction(
    REMOVE_POST_ACTION,
    props<{ postId: string }>()
);
