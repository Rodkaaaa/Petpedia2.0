import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, NosotrosPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element = {<Home/>}/>
      <Route path="/nosotros" element = {<NosotrosPage/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
