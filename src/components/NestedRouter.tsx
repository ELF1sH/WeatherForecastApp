import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {MainPage} from "./pages/main-page/MainPage";
import {HistoryPage} from "./pages/history-page/HistoryPage";
import {ForecastPage} from "./pages/forecast-page/ForecastPage";

export const NestedRouter : React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/forecast/:id" element={<ForecastPage />} />
                <Route path="/history" element={<HistoryPage />} />
            </Routes>
        </BrowserRouter>
    )
}