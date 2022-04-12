import React from "react";
import {MainPageHeader} from "../../main-page-components/main-page-header/MainPageHeader";
import {LocationsWrapper} from "../../main-page-components/locations-wrapper/LocationsWrapper";


export const MainPage : React.FunctionComponent = () => {
    return (
        <>
            <MainPageHeader />
            <LocationsWrapper />
        </>
    )
}