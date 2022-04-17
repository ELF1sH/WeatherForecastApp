import React from "react";
import {Switch} from "@mui/material";
import classes from './ThemeSwitcher.module.css'
import {ThemeType} from "../../themes";
import {useDispatch, useSelector} from "react-redux";
import {switchTheme, ThemeAction} from "../../store/ActionCreators/ThemeActionCreators";
import {Dispatch} from "redux";
import {RootState} from "../../store/ReducersCombiner";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const ThemeSwitcher : React.FunctionComponent = () => {

    const state = useSelector(state => state as RootState).theme
    const dispatch : Dispatch<ThemeAction> = useDispatch()

    return (
        <div className={classes.switchWrapper}>
            <span>light</span>
            <Switch {...label} defaultChecked={state.theme.themeType === ThemeType.dark} onClick={() => dispatch(switchTheme())}/>
            <span>dark</span>
        </div>
    )
}