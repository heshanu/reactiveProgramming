import { createAction, props } from '@ngrx/store';
import { User } from '../../../modal/user.interface';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] Login success';
export const LOGIN_FAIL = '[auth page] login Fail';
export const loginStart =
    createAction(LOGIN_START, props<{ email: string; password: string}>());
export const loginSucess = createAction(LOGIN_SUCCESS, props<{user: User}>);