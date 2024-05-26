import { Action, createReducer, on } from '@ngrx/store';
import { PostsState, initialState } from '../state/posts.state';
import {  addPostSuccess,deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess } from './posts.action';

const _postReducer = createReducer(
    initialState,
    on(addPostSuccess, (state, action) => {
        let post = { ...action.post };

        return {
          ...state,
          posts: [...state.posts, post],
        };
      }),
    on(updatePostSuccess, (state, action) => {
        const updatedPosts = state.posts.map((post) => {
          return action.post.id === post.id ? action.post : post;
        });

        return {
          ...state,
          posts: updatedPosts,
        };
      }),
    on(deletePostSuccess, (state, { id }) => {
        const updatedPosts = state.posts.filter((post) => {
          return post.id !== id;
        });

        return {
          ...state,
          posts: updatedPosts,
        };
      }),
    on(loadPostsSuccess, (state, action) => {
        return {
          ...state,
          posts: action.posts,
        };
      })
);

export function postReducer(state: PostsState | undefined, action: Action) {
    return _postReducer(state, action);
}
