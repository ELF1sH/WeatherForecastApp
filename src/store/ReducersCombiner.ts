import {combineReducers} from "redux";
import {themeReducer} from "./reducers/ThemeReducer";
import {locationsReducer} from "./reducers/LocationsReducer";

export const reducers = combineReducers({
    theme: themeReducer,
    locations: locationsReducer
})

export type RootState = ReturnType<typeof reducers>