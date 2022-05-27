import { ReducerState } from "react";
import { AnyAction, CombinedState, combineReducers } from "redux";
import counterSlice, { CounterState } from "../redux/reducers/counterReducer";

interface RootState {
    counter: CounterState
}

export default RootState