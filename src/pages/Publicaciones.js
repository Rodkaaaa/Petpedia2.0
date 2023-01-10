import React, { useState, useEffect } from "react";
import { CardPostComponent, Navbar, FooterComponent } from "../components";
import "./Publicaciones.css";
import { getAllPost } from "../services/Post";
/* import TextField from "@mui/material/TextField";
 */

/* import search from "../components"; */

const Publicaciones = () => {
  const [state, setState] = useState([]);
  const [stateSearch, setStateSearch] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const postBD = await getAllPost();
    setState(postBD);
    setStateSearch(postBD);
  };

  /* const getComuna = async()=>{
  const ComunaBD = await getAllComuna();
  setStateComuna(ComunaBD)
} */
  /* 
const allNombrePost = async(nombre)=>{
  const postBD = await findAllNombrePost(nombre)
    setState(postBD)
    getPost()
} */

  return (
    <div>
      <Navbar />
      <div class="grilla">
        <CardPostComponent
          setPostEditado={setState}
          Posts={state}
          searchName={stateSearch}
          useEffects={useEffect}
          infoText = "Publicaciones"
        />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Publicaciones;
