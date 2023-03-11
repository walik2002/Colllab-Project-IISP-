import React from 'react';
import { Navigate } from 'react-router-dom';
import MainScreen from './Pages/MainScreen';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import "./css.css"



const App = () => {
  return (
  <BrowserRouter>
      <MainScreen/>
      <AppRouter/>
  </BrowserRouter>
  );}

export default App;