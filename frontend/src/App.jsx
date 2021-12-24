//---IMPORT LIBRARIES---
import React from 'react';
import {
  Routes, Switch, Route, Link, useHistory, useLocation, Redirect, useParams, useNavigate
} from 'react-router-dom';

//---IMPORT COMPONENTS---

//---CREATE CONTEXT---
export const AppContext = React.createContext();


export const App = function (){

  return (
    <div>
      <AppContext.Provider value={ }>
      <Routes>
          <Route path="/" element={ <Header /> }>
            {/* Set routes up here */}
            {/* Route for when no address is found - 404 page */}
            <Route path="*" element={<NoPath/>}/> 
          </Route>
      </Routes>
      </AppContext.Provider>
    </div>
  )
}