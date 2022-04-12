import {FunctionComponent, useEffect, useState} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {connect, useDispatch} from "react-redux";
import {LocationsState} from "../../../store/reducers/LocationsReducer";
import {fetchData, setLoadingTrue} from "../../../store/ActionCreators/LocationsActionCreators";

export const LocationsWrapper : FunctionComponent = () => {

    const locationsState = useTypedSelector(state => state.locations)

    return (
        locationsState.error ? <p>locationsState.error</p> : <p>nothing</p>
    )
}

function mapStateToProps(state : LocationsState) {
    return state
}

export default connect(mapStateToProps)(LocationsWrapper);