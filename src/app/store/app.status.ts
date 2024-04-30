
//import { counterInterface } from "../modal/counter.interface";
//import { counterReducer } from "../module/counter/state/counter.reducer";
//import { postReducer } from "../module/posts/post-list/state/posts.reducer";
//import { PostsState } from "../module/posts/post-list/state/posts.state";
import { SharedReducer } from "./shared.reducers";
import { SHARED_STATE_NAME } from "./shared.selector";
import { SharedState } from "./shared.state";

export interface AppState {
    // counter: counterInterface;
    // posts: PostsState
    [SHARED_STATE_NAME]:SharedState;
}

export const appReducer = {
    // counter: counterReducer,
    // posts: postReducer
    [SHARED_STATE_NAME]:SharedReducer
}