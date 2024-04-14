import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncreament = createAction(
    "customIncreament",
    props<{ count: number }>()
);

export const customDecreament = createAction(
    "customDecreament",
    props<{ count: number }>()
);

export const changeChannelName = createAction(
    "changeChannelName");

