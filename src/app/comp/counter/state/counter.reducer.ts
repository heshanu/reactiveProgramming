import { counterInterface } from '../../../modal/counter.interface';
import { increment, decrement, reset, customIncreament, customDecreament, changeChannelName } from './counter.action';
import { initialState } from './counter.state';
import { Action, createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    }),
    on(customIncreament, (state, action) => {
        console.log(action);
        return {
            ...state,
            counter: state.counter + action.count
        };
    }),
    on(customDecreament, (state, action) => {
        console.log(action);
        return {
            ...state,
            counter: state.counter - action.count
        };
    }),
    on(changeChannelName, (state) => {
        return {
            ...state,
            channelName: "heshan umayanga",
        };
    })
);

export function counterReducer(state: { counter: number; channelName: string, password: string } | undefined, action: Action) {
    return _counterReducer(state, action);
}