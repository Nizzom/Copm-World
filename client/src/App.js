import React from 'react'
import Header from './header/Header';
import { useState } from "react";
import Categories from './categories/Categories';
import Ads from './ads/Ads';
import {useRoutes} from './route'
import {BrowserRouter as Router} from 'react-router-dom'
import {ModeContext} from './context/ModeContext'


function App() {
  
  const [menuOpen , setMenuOpen] = useState(false)
  const [mode , setMode] = useState(false)
  const route = useRoutes()
  console.log("app  ",mode)


  return (
    <ModeContext.Provider value={
      mode
    } >
    <div className="App">
      <Router>
      <Header  menuOpen={menuOpen} setMenuOpen={setMenuOpen} mode={mode} setMode={setMode} />
      <Categories menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Ads mode={mode}/>
      {route}
      </Router>
    </div>
    </ModeContext.Provider>
  );
}

export default App;
