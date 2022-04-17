import {ChosenLocationType} from "../ActionTypes";
import {Forecast} from "../reducers/ChosenLocationReducer";
import {Dispatch} from "redux";
import {API} from "../../API/api";
import {Location} from "./LocationsActionCreators";

export interface ChosenLocationAction {
    type: ChosenLocationType
}

export interface ChosenLocationActionSetLocation extends ChosenLocationAction {
    payload: {
        location: Location
    }
}

export interface otherData {
    currentTime: string
    sunRise: string,
    sunSet: string,
    timezone: string,
    timezoneName: string
}

export interface ChosenLocationActionSetForecast extends ChosenLocationAction {
    type: ChosenLocationType
    payload: {
        forecasts: Forecast[],
        otherData: otherData
    }
}

export const setLoadingTrue = () : ChosenLocationAction => {
    return {
        type: ChosenLocationType.SET_LOADING_TRUE
    }
}

export const setChosenLocation = (loc : Location) : ChosenLocationActionSetLocation => {
    return {
        type: ChosenLocationType.SET_LOCATION,
        payload: {
            location: loc
        }
    }
}

export const setForecast = (forecasts: Forecast[], otherData: otherData) : ChosenLocationActionSetForecast => {
    return {
        type: ChosenLocationType.SET_FORECASTS,
        payload: {
            forecasts: forecasts,
            otherData: otherData
        }
    }
}

export const fetchForecast = (id: number) => {
    return async (dispatch : Dispatch<ChosenLocationAction>) => {
        dispatch(setLoadingTrue())
        const api = new API()
        const response = await api.getForecast(id)
        const forecasts : Forecast[] = response.data.consolidated_weather.map((item: {
            id: any;
            weather_state_name: any;
            applicable_date: any;
            created: any;
            min_temp: any;
            max_temp: any;
            wind_speed: any;
            air_pressure: any;
            humidity: any;
            visibility: any;
        }) => {
            return <Forecast>{
                id: item.id,
                weatherState: item.weather_state_name,
                date: item.applicable_date,
                created: item.created,
                minTemp: item.min_temp,
                maxTemp: item.max_temp,
                windSpeed: item.wind_speed,
                airPressure: item.air_pressure,
                humidity: item.humidity,
                visibility: item.visibility
            }
        })
        const otherData : otherData = {
            currentTime: response.data.time,
            sunRise: response.data.sun_rise,
            sunSet: response.data.sun_set,
            timezone: response.data.timezone,
            timezoneName: response.data.timezone_name
        }
        dispatch(setForecast(forecasts, otherData))
    }
}