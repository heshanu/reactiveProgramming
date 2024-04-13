import { Action, createReducer, on } from '@ngrx/store';
import { PostsState, initialState } from '../state/posts.state';

const _postReducer = createReducer(initialState);

export function postReducer(state: PostsState | undefined, action: Action) {
    return _postReducer(state, action);
}
