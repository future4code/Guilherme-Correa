import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { HomePage } from '../pages/HomePage';
import { ListTripPage } from '../pages/ListTripPage';
import { LoginPage } from "../pages/LoginPage";
import { TripsPage } from "../pages/TripsPage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { AdminHomePage } from '../pages/AdminHomePage'
import { CreateTripPage } from "../pages/CreateTripPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} exact element={<HomePage/>} />
                <Route path={"/trips/list"} exact element={<ListTripPage />} />
                <Route path={"/trips/application"} exact element={<ApplicationFormPage/>} />
                <Route path={"/login"} exact element={<LoginPage/>} />
                <Route path={"/admin/trips/:id"} exact element={<TripsPage/>} />
                <Route path={"/admin/trips/list"} exact element={<AdminHomePage/>} />
                <Route path={"/admin/trips/create"} exact element={<CreateTripPage/>} /> 
            </Routes>
        </BrowserRouter>
    )
}