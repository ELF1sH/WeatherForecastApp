import {darkTheme, lightTheme, Theme, ThemeType} from "../../themes";
import {ThemeAction} from "../ActionCreators/ThemeActionCreators";
import {ThemeActionType} from "../ActionTypes";

export type ThemeState = {
    theme: Theme
};

const initialState : ThemeState = {
    theme: darkTheme
}

export const themeReducer = (state : ThemeState = initialState, action : ThemeAction) : ThemeState => {
    let newState : ThemeState = { ...state }

    switch (action.type) {
        case ThemeActionType.SWITCH_THEME:
            newState.theme.themeType === ThemeType.light ? newState.theme = darkTheme : newState.theme = lightTheme
            return newState
        default:
            return newState
    }
}