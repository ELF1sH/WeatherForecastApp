import React from "react";
import {CircularProgress, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/ReducersCombiner";
import classes from './ForecastPage.module.css'

export const ForecastPage : React.FC = () => {

    const forecastState = useSelector(state => state as RootState).chosenLocation

    console.log(forecastState)

    const getDateTime = (date: string) : string => {
        return date.split("T").map((item, index) => index === 0 ? item : item.slice(0, 8)).join(" ")
    }

    const getDate = (date: string) : string => {
        return date.split("T")[0]
    }

    const round = (num: number) : string => {
        return (Math.round(num * 100) / 100).toString()
    }

    if (forecastState.isLoading) return <CircularProgress size={"5rem"} className={classes.circProgress} />
    else return (
        <div className={classes.wrapper}>
            <div className={classes.locationWrapper}>
                <Typography variant={"h3"}>{forecastState.chosenLocation?.title}</Typography>
                <p><b>Timezone:</b> {forecastState.otherData.timezone}</p>
                <p><b>Current time:</b> {getDateTime(forecastState.otherData.currentTime)}</p>
                <p><b>Sunrise time:</b> {getDateTime(forecastState.otherData.sunRise)}</p>
                <p><b>Sunset time:</b> {getDateTime(forecastState.otherData.sunSet)}</p>
            </div>
            <div className={classes.forecastsWrapper}>
                {
                    forecastState.forecasts.map(item =>
                        <div className={classes.forecast} key={item.id}>
                            <h2 className={classes.date}>{getDate(item.date)}</h2>
                            <h4>{item.weatherState}</h4>
                            <p>Daytime temp: {round(item.maxTemp)}</p>
                            <p>Nighttime temp: {round(item.minTemp)}</p>
                            <p>Wind speed: {round(item.windSpeed)}</p>
                            <p>Humidity: {item.humidity}</p>
                            <p>Visibility: {round(item.visibility)}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}