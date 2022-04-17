import {combineReducers} from "redux";
import {themeReducer} from "./reducers/ThemeReducer";
import {locationsReducer} from "./reducers/LocationsReducer";
import {chosenLocationReducer} from "./reducers/ChosenLocationReducer";

export const reducers = combineReducers({
    theme: themeReducer,
    locations: locationsReducer,
    chosenLocation: chosenLocationReducer
})

export type RootState = ReturnType<typeof reducers>