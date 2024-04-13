
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterInterface } from '../../../modal/counter.interface';

const getCounterState = createFeatureSelector<counterInterface>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
    return state.channelName;
});

export const getPassword = createSelector(getCounterState, (state) => {
    return state.password;
});

// export const getAddress = createSelector(getCounterState, (state) => {
//     return state.address;
// })
