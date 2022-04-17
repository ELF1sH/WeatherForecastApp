import {FunctionComponent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/ReducersCombiner";
import classes from './LocationsWrapper.module.css'
import {Card, LinearProgress} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {fetchForecast, setChosenLocation} from "../../../store/ActionCreators/ChosenLocationActionCreators";
import {Location} from "../../../store/ActionCreators/LocationsActionCreators";

export const LocationsWrapper : FunctionComponent = () => {

    const navigate = useNavigate();

    const locationsState = useSelector(state => state as RootState).locations
    const dispatch = useDispatch()

    const onClickHandle = (id: number, loc: Location) => {
        dispatch(setChosenLocation(loc))
        navigate(`/forecast/${id}`)
        dispatch(fetchForecast(id))
    }

    return (
        locationsState.loading ?
            <LinearProgress /> :
            <div className={classes.locationsWrapper}>
                {locationsState.locations.map(item => {
                    return (
                        <Card className={classes.locationCard} key={item.forecastId} onClick={() => onClickHandle(item.forecastId, item)}>
                            <h3 className={classes.header}>{item.title}</h3>
                            <p className={classes.text}><b>Location type: </b>{item.locationType}</p>
                            <p className={classes.text}><b>Latitude: </b>{item.latitude}</p>
                            <p className={classes.text}><b>Longitude: </b>{item.longitude}</p>
                        </Card>
                    )
                })}
            </div>
    )
}