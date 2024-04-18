import { counterReducer } from "../comp/counter/state/counter.reducer";
import { counterInterface } from "../modal/counter.interface";
import { postReducer } from "../module/posts/post-list/state/posts.reducer";
import { PostsState } from "../module/posts/post-list/state/posts.state";

export interface AppState {
    counter: counterInterface;
    posts: PostsState
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer
}