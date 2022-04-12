import {LocationsActionType} from "../ActionTypes";
import {ThunkDispatch} from "redux-thunk";
import {LocationsState} from "../reducers/LocationsReducer";
import {API} from "../../API/api";
import {Dispatch} from "redux";

export interface LocationsAction {
    type: LocationsActionType
}

export interface Location {
    title: string,
    locationType: string,
    forecastId: number,
    latitude: number,
    longitude: number
}

export interface LocationsActionSetData extends LocationsAction {
    type: LocationsActionType,
    payload: {
        error: string | null,
        locations: Array<Location>
    }
}

export const deleteData = () : LocationsAction => {
    return {
        type: LocationsActionType.DELETE_DATA
    }
}

export const setLoadingTrue = () : LocationsAction => {
    return {
        type: LocationsActionType.SET_LOADING_TRUE
    }
}

export const fetchData = (keyWord : string) => {
    return async (dispatch : Dispatch<LocationsAction>) => {
        try {
            dispatch(setLoadingTrue())
            const api = new API()
            const response = await api.getLocations(keyWord)
            dispatch(setData(null, response.data))
        }
        catch (e) {
            dispatch(setData("Error", []))
        }
    }
}

export const setData = (
    error: string | null,
    locations: Array<Location>) : LocationsActionSetData => {
    return {
        type: LocationsActionType.SET_DATA,
        payload: {
            error: error,
            locations: locations
        }
    }
}