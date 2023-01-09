import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, LoginPage, NosotrosPage, Publicaciones} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element = {<Home/>}/>
      <Route path="/nosotros" element = {<NosotrosPage/>}/>
      <Route path="/publicaciones" element={<Publicaciones />} />
      <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
