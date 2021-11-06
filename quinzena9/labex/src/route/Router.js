import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import {Home} from '../pages/HomePage';
import {TravelPage} from '../pages/TravelPage';
import { AdmPage } from "../pages/AdmPage";
import { TripsPage } from "../pages/TripsPage";
import { TripFormPage } from "../pages/TripFormPage";
import { AdmHomePage } from "../pages/AdmHomePage";
import { CriarViagemPage } from "../pages/CriarViagemPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} exact element={<Home/>} />
                <Route path={"/travelpage"} exact element={<TravelPage />} />
                <Route path={"/admpage"} exact element={<AdmPage/>} />
                <Route path={"/tripformpage"} exact element={<TripFormPage/>} />
                <Route path={"/tripspage"} exact element={<TripsPage/>} />
                <Route path={"/admhomepage"} exact element={<AdmHomePage/>} />
                <Route path={"/criarviagempage"} exact element={<CriarViagemPage/>} /> 
            </Routes>
        </BrowserRouter>
    )
}