import { Action, createReducer, on } from '@ngrx/store';
import { PostsState, initialState } from '../state/posts.state';
import { addPost, removePost, updatePost } from './posts.action';
import { PostInterface } from '../../../modal/posts.interface';

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

    on(updatePost, (state: any, { post }) => {
        // Find the index of the post to be updated
        const index = state.findIndex((p: any) => p.id === post.id);

        // If the post is found, update it; otherwise, return the original state
        return index !== -1 ? [...state.slice(0, index), post, ...state.slice(index + 1)] : state;
    })
);

export function postReducer(state: PostsState | undefined, action: Action) {
    return _postReducer(state, action);
}
