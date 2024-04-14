import { PostInterface } from "../../../modal/posts.interface";

export interface PostsState {
    posts: PostInterface[];
}

export const initialState: PostsState = {
    posts: [
        { id: '1', title: 'Sample Title 1', description: 'Sample Description 1' },
        { id: '2', title: 'Sample Title 1', description: 'Sample Description 1' },
    ],
};