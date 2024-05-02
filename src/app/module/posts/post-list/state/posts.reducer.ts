import { Action, createReducer, on } from '@ngrx/store';
import { PostsState, initialState } from '../state/posts.state';
import { addPost, deletePost, loadPostsSuccess, updatePost } from './posts.action';

const _postReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post };
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post],
        };
    }),

    on(updatePost, (state, action) => {
        const updatedPosts = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });

        return {
            ...state,
            posts: updatedPosts,
        };
    }),

    on(deletePost, (state, { id }) => {
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
