import React, { Component } from "react";
import { publicRoutes, authRoutes } from "../Routs";
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "../index";
import Auth from "../Pages/Auth";

const AppRouter = () => {
    const {user} = useContext(Context)
    // const isAuth = true
    console.log(user.isAuth)
    const navigate = useNavigate();

    return (
        <Routes>

             {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
             )       
            }   
            {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>)}
            
        </Routes>
    )
}

export default AppRouter;