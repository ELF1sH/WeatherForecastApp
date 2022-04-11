import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {MainPage} from "./pages/main-page/MainPage";
import {HistoryPage} from "./pages/history-page/HistoryPage";

export const NestedRouter : React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/history" element={<HistoryPage />} />
            </Routes>
        </BrowserRouter>
    )
}