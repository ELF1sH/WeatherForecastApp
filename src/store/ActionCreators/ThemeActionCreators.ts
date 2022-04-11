import {ThemeActionType} from "../ActionTypes";

export interface ThemeAction {
    type: ThemeActionType
}

export const switchTheme = () : ThemeAction => {
    return {
        type: ThemeActionType.SWITCH_THEME
    }
}