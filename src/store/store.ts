import {createStore, applyMiddleware, Store} from "redux";
import {reducers} from "./ReducersCombiner";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
)