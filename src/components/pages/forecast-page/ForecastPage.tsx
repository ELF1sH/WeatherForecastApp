import React from "react";
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/ReducersCombiner";

export const ForecastPage : React.FC = () => {

    const forecastState = useSelector(state => state as RootState).chosenLocation

    console.log(forecastState)

    return (
        <Typography variant={"h1"}>asdf</Typography>
    )
}