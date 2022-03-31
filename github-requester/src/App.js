
import React from 'react'
import './App.css'
import axios from 'axios'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login                            from "./Pages/Login";
import RouteUrls from "./Routes/route-urls";
import Catalog from "./Pages/Catalog";
import API1 from "./Pages/API1";
import API2 from "./Pages/API2";
import API3 from "./Pages/API3";
import API4 from "./Pages/API4";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={RouteUrls.LOGIN} element={<Login/>} exact/>
                </Routes>
                <Routes>
                    <Route path={RouteUrls.Catalog} element={<Catalog/>} exact/>
                </Routes>
                <Routes>
                    <Route path={RouteUrls.API1} element={<API1/>} exact/>
                </Routes>
                <Routes>
                    <Route path={RouteUrls.API2} element={<API2/>} exact/>
                </Routes>
                <Routes>
                    <Route path={RouteUrls.API3} element={<API3/>} exact/>
                </Routes>
                <Routes>
                    <Route path={RouteUrls.API4} element={<API4/>} exact/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
