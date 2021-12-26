//---IMPORT LIBRARIES---
import React, {useState, useCallback, createContext} from 'react';
import {
  Routes, Switch, Route, Link, useHistory, useLocation, Redirect, useParams, useNavigate
} from 'react-router-dom';

//---IMPORT COMPONENTS---
import Header from './header/Header.jsx';
import ComponentName from './component/Component.jsx';

//---CREATE CONTEXT---
export const AppContext = React.createContext();


export const App = function (){
  // ---STATE VARIABLES---
  const [example, setExample] = useState();

  // ---COMPONENT FUNCTIONS---

  // ---USE EFFECT---

  // ---RENDER COMPONENT---
  return (
    <div>
      <AppContext.Provider value={ { example } }>
      Test text
      <Routes>
          <Route path="*" element={ <Header /> }>
            {/* Set routes up here */}
            {/* Route for when no address is found - 404 page */}
            <Route path="*" element={<ComponentName />}/> 
          </Route>
      </Routes>
      </AppContext.Provider>
    </div>
  )
}