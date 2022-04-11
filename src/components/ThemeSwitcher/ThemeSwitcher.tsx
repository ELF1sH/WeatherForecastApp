import React from "react";
import {Switch} from "@mui/material";
import classes from './ThemeSwitcher.module.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ThemeType} from "../../themes";
import {useDispatch} from "react-redux";
import {switchTheme, ThemeAction} from "../../store/ActionCreators/ThemeActionCreators";
import {Dispatch} from "redux";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const ThemeSwitcher : React.FunctionComponent = () => {

    const state = useTypedSelector(state => state.theme)
    const dispatch : Dispatch<ThemeAction> = useDispatch()

    return (
        <div className={classes.switchWrapper}>
            <span>light</span>
            <Switch {...label} defaultChecked={state.theme.themeType === ThemeType.dark} onClick={() => dispatch(switchTheme())}/>
            <span>dark</span>
        </div>
    )
}