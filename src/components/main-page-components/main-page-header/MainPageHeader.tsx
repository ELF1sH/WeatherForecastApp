import React, {useState} from "react";
import classes from './MainPageHeader.module.css'
import {ThemeType} from "../../../themes";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Card, TextField} from "@mui/material";
import {deleteData, fetchData} from "../../../store/ActionCreators/LocationsActionCreators";
import {useDispatch} from "react-redux";

export const MainPageHeader : React.FunctionComponent = () => {

    const [value, setValue] = useState<string>("")
    const locationsState = useTypedSelector(state => state.locations)
    const dispatch = useDispatch()

    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if (e.target.value.length > 0)
            dispatch(fetchData(e.target.value))
        else
            dispatch(deleteData())
    }

    const state = useTypedSelector(state => state.theme)
    return (
        <div className={`${classes.mainBlock} ${state.theme.themeType === ThemeType.light ? classes.bg_light : classes.bg_dark}`}>
            <Card className={classes.inputWrapper}>
                <h3 className={classes.inputHeader}>Type location to get weather forecast</h3>
                <TextField
                    id="outlined-basic" label="Location" variant="outlined"
                    className={classes.mainInput} value={value} onChange={onChangeHandler}
                />
            </Card>
        </div>
    )
}