import { counterReducer } from "../comp/counter/state/counter.reducer";
import { counterInterface } from "../modal/counter.interface";
import { postReducer } from "../posts/post-list/state/posts.action";
import { PostsState } from "../posts/post-list/state/posts.state";

export interface AppState {
    counter: counterInterface;
    posts: PostsState
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer
}