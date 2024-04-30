export interface SharedState {
    showLoader: boolean;
    errorMessage: string;
}

export const initialState: SharedState = {
    showLoader: false,
    errorMessage: ''
}