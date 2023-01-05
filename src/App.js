import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Publicaciones } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
