import React from "react";
import { publicRoutes, authRoutes } from "../Routs";
import { Routes, Route, Navigate } from 'react-router-dom';
import { MAINS_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>)}
            
        </Routes>
    )
}

export default AppRouter;