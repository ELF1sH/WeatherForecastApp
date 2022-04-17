import {ChosenLocationType} from "../ActionTypes";
import {
    ChosenLocationAction,
    ChosenLocationActionSetForecast,
    ChosenLocationActionSetLocation
} from "../ActionCreators/ChosenLocationActionCreators";
import {Location} from "../ActionCreators/LocationsActionCreators";

export interface Forecast {
    id: number,
    weatherState: string,
    date: string,
    created: string,
    minTemp: number,
    maxTemp: number,
    windSpeed: number,
    airPressure: number,
    humidity: number,
    visibility: number
}

export interface ChosenLocationState {
    chosenLocation: Location | null
    isLoading: boolean
    error: string | null
    forecasts: Forecast[]
    otherData: {
        currentTime: string
        sunRise: string,
        sunSet: string,
        timezone: string,
        timezoneName: string
    }
}

const initialState : ChosenLocationState = {
    chosenLocation: null,
    isLoading: false,
    error: null,
    forecasts: [],
    otherData: {
        currentTime: "",
        sunRise: "",
        sunSet: "",
        timezone: "",
        timezoneName: ""
    }
}

export const chosenLocationReducer = (state : ChosenLocationState = initialState, action: ChosenLocationAction) => {
    const newState : ChosenLocationState = state
    switch (action.type) {
        case ChosenLocationType.SET_LOADING_TRUE:
            newState.isLoading = true
            return newState
        case ChosenLocationType.SET_LOCATION:
            newState.chosenLocation = (action as ChosenLocationActionSetLocation).payload.location
            return newState
        case ChosenLocationType.SET_FORECASTS:
            newState.isLoading = false
            newState.forecasts = (action as ChosenLocationActionSetForecast).payload.forecasts
            newState.otherData = (action as ChosenLocationActionSetForecast).payload.otherData
            return newState
        default:
            return newState
    }
}