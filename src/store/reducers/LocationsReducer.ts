import {Location, LocationsAction, LocationsActionSetData} from "../ActionCreators/LocationsActionCreators";
import {LocationsActionType} from "../ActionTypes";

export type LocationsState = {
    loading: boolean,
    error: string | null,
    locations: Array<Location>
}

const initialState : LocationsState = {
    loading: false,
    error: null,
    locations: []
}

export const locationsReducer = (state : LocationsState = initialState, action: LocationsAction | LocationsActionSetData) => {
    const newState : LocationsState = state

    switch (action.type) {
        case LocationsActionType.SET_DATA:
            newState.loading = false
            newState.error = (action as LocationsActionSetData).payload.error
            newState.locations = (action as LocationsActionSetData).payload.locations
            return newState
        case LocationsActionType.FETCH_DATA:
            newState.loading = true
            return newState
        case LocationsActionType.DELETE_DATA:
            newState.loading = false
            newState.error = null
            newState.locations = []
            return newState
        case LocationsActionType.SET_LOADING_TRUE:
            newState.loading = true
            return newState
        default:
            return newState
    }
}