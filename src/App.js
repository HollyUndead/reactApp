import React from "react";
import RandomDish from "./components/radndomDish"
import Plates from "./components/plate";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css"

function App() {  
  return (
    <>
      <nav>
          <header>
              <Link to="">Random dish</Link>
      
              <Link to="/favorite">Favorite dish</Link>
          </header>
      </nav>
      <Routes>
        <Route index element={<RandomDish />}></Route>
        <Route path="favorite" element={<Plates />}></Route>
      </Routes>
    </>      
  );
}


export default App;