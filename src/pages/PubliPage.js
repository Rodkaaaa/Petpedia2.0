import React, {  useEffect, useState } from "react";
import { getAllPost, findAllNombrePost } from "../services/Post";
 import { Publicacion } from "../components";


// const post = [{
//   url: "",
//   titulo: "",
//   contenido: ""
// }]

const PubliPage = () => {

  const [state, setState] = useState([]);

  useEffect(()=>{
    getPost();
  },[])

  const getPost = async()=>{
    const postBD = await getAllPost();
    setState(postBD);
  }

  const allNombrePost = async(nombre)=>{
    const postBD = await findAllNombrePost(nombre);
    setState(postBD)
    getPost();
  }

  return (
    <div className='App'>
    <div className='contenedor-principal'>
      <hr></hr>
    <Publicacion Posts={state} search = {allNombrePost} />
    </div>
    </div>
    
  );
};

export default PubliPage;