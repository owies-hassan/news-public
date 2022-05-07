import React, {FC} from 'react';
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Details from "./Pages/Detials/Details";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App:React.FC=()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

          <Routes>
            <Route   path='/' element={<Home/>}/>
            <Route  path='/details/:title' element={<Details/>}/>
          </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
