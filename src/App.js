import React from "react";
import Plates from "./components/plate";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css"
import RandomDish from "./components/RandomDish";

function App() {  

  const indexPath = 'reactApp/', favoriteList = 'reactApp/favorite';

  return (
    <>
      <nav>
          <header>
              <Link to={indexPath}>Random dish</Link>
      
              <Link to={favoriteList}>Favorite dish</Link>
          </header>
      </nav>
      <Routes>
        <Route path={indexPath} element={<RandomDish />}></Route>
        <Route path={favoriteList} element={<Plates />}></Route>
      </Routes>
    </>      
  );
}


export default App;