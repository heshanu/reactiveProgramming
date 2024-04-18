import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterInterface } from '../../../modal/counter.interface';

export const COUNTER_STATE_NAME = "counter";

const getCounterState = createFeatureSelector<counterInterface>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
    return state.channelName;
});


