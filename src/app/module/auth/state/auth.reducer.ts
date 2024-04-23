import { Action, State, createReducer, on } from '@ngrx/store';
import { AuthState, initialState } from './auth.state';
import { loginSucess } from './auth.action';
import { User } from '../../../modal/user.interface';
import { JsonPipe } from '@angular/common';

const _authReducer = createReducer(
        initialState,
        on(loginSucess, (state, action:any) => { // Update the type of the 'action' parameter
            console.log(action||"action");
            return {
                ...state,
                user:action.user
            };
        })
    );
  
export function AuthReducer(state: AuthState, action: Action) {
    return _authReducer(state, action);
}