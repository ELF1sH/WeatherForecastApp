import {LocationsActionType} from "../ActionTypes";

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

export const fetchData = () : LocationsAction => {
    return {
        type: LocationsActionType.FETCH_DATA
    }
}

export const setData = (
    error: string | null,
    locations: Array<{
        title: string,
        locationType: string,
        forecastId: number,
        latitude: number,
        longitude: number
}>) : LocationsActionSetData => {
    return {
        type: LocationsActionType.SET_DATA,
        payload: {
            error: error,
            locations: locations
        }
    }
}