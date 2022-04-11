import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/ReducersCombiner";

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector