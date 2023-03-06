import React from "react";
import { publicRoutes, authRoutes } from "../Routs";
import { Routes, Route, Navigate } from 'react-router-dom';
import { MAINS_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>)}
            
        </Routes>
    )
}

export default AppRouter;