import { Action, State, createReducer, on } from '@ngrx/store';
import { AuthState, initialState } from './auth.state';
import { loginSucess } from './auth.action';

const _authReducer = createReducer(initialState,
    on(loginSucess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    })
)


export function AuthReducer(state: AuthState, action: Action) {
    return _authReducer(state, action);
}