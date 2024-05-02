import { createAction, props } from '@ngrx/store';
import { User } from '../../../modal/user.interface';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login Fail';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';

export const AUTo_LOGIN_ACTION = '[auth page] auto login action';

export const LOGOUT_ACTION = '[auth page] logout';

export const loginStart =
    createAction(LOGIN_START, props<{ email: string; password: string}>());

export const loginSucess = createAction(LOGIN_SUCCESS, props<{user: User}>);

export const signupStart = createAction(
    SIGNUP_START,
    props<{ email: string; password: string }>()
  );
  
export const signupSuccess = createAction(
    SIGNUP_SUCCESS,
    props<{ user: User }>()
  );

export const autoLogin=createAction(AUTo_LOGIN_ACTION);  

export const autoLogout=createAction(LOGOUT_ACTION);