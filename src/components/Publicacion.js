import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Publicacion.css';
import Rating from './Rating';


const Publicacion = ({ Posts, search, getById }) => {
  const {id} = useParams();
  const post = Posts.find(post => post.id === id )
  console.log(post)
  return (
    <div class="publicacion">
      {Posts.map((post) => (
        <div className='contenedor-testimonio'>
          <img
            className='imagen-testimonio'
            src={post.url }
            alt='Foto de Cori' />

          <div className='contenedorTextoTestimonio'>
            <br></br>
            <br></br>
            <p className='tituloTestimonio'>
              {post.titulo} </p> 
      
        

            <Rating />
            <p className='textoTestimonio'>"{post.contenido}"</p>
            <p className="comuna"> {post.usuario.comuna.nombreComuna}, {post.usuario.direccion}</p>
            <br></br>
            <button type="button" class="btn btn-outline-warning">#Adopción</button>
            <button type="button" class="btn btn-outline-warning">#Gatitos</button>
            <button type="button" class="btn btn-outline-warning">#Ñuñoa</button>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-outline-warning">#Mascotas</button>

            <button type="button" class="btn btn-outline-warning">#Wawitas</button>

          </div>
        </div>
        ))}
  </div>
  )
}

export default Publicacion;