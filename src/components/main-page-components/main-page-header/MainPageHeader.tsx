import React, {ChangeEvent, useMemo, useState} from "react";
import classes from './MainPageHeader.module.css'
import {ThemeType} from "../../../themes";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {TextField} from "@mui/material";
import {API} from "../../../API/api";

export const MainPageHeader : React.FunctionComponent = () => {

    const [value, setValue] = useState<string>("")
    console.log(value)

    const api = useMemo(() => new API, [])

    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        api.getLocations(e.target.value)
    }

    const state = useTypedSelector(state => state.theme)
    return (
        <div className={`${classes.mainBlock} ${state.theme.themeType === ThemeType.light ? classes.bg_light : classes.bg_dark}`}>
            <div className={classes.inputWrapper}>
                <h3 className={classes.inputHeader}>Type location to get weather forecast</h3>
                <TextField id="outlined-basic" label="Location" variant="outlined" className={classes.mainInput} value={value} onChange={onChangeHandler} />
            </div>
        </div>
    )
}