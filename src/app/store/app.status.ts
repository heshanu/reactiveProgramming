
//import { counterInterface } from "../modal/counter.interface";
//import { counterReducer } from "../module/counter/state/counter.reducer";
//import { postReducer } from "../module/posts/post-list/state/posts.reducer";
//import { PostsState } from "../module/posts/post-list/state/posts.state";
import { AuthReducer } from "../module/auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../module/auth/state/auth.selector";
import { AuthState } from "../module/auth/state/auth.state";
import { SharedReducer } from "./shared.reducers";
import { SHARED_STATE_NAME } from "./shared.selector";
import { SharedState } from "./shared.state";

export interface AppState {
    // counter: counterInterface;
    // posts: PostsState
    [SHARED_STATE_NAME]:SharedState;
    [AUTH_STATE_NAME]:AuthState;
}

export const appReducer = {
    // counter: counterReducer,
    // posts: postReducer
    [SHARED_STATE_NAME]:SharedReducer,
    [AUTH_STATE_NAME]:AuthReducer
}