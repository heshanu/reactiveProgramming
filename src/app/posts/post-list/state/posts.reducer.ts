import { Action, createReducer, on } from '@ngrx/store';
import { PostsState, initialState } from '../state/posts.state';
import { addPost, removePost } from './posts.action';
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


);

export function postReducer(state: PostsState | undefined, action: Action) {
    return _postReducer(state, action);
}
