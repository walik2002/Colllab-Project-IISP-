import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import UserStore from './store/UserStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null)
root.render(
 <Context.Provider value = {{

  user: new UserStore()

 }}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
   
</Context.Provider>
);


