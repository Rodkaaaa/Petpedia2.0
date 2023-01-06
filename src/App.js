import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, NosotrosPage, Publicaciones} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element = {<Home/>}/>
      <Route path="/nosotros" element = {<NosotrosPage/>}/>
      <Route path="/publicaciones" element={<Publicaciones />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
