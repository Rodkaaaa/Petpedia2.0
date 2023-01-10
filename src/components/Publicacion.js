import React, { useState } from 'react';
import './Publicacion.css';
import Rating from './Rating';


const Publicacion = ({ Posts, search }) => {
  return (
    <div class="container">
      <input 
      onChange={search}
      type="text"/>
      {Posts.map((post) => (
        <div className='contenedor-testimonio'>
          <img
            className='imagen-testimonio'
            src={post.url}
            alt='Foto de Cori' />

          <div className='contenedor-texto-testimonio'>
            <br></br>
            <br></br>
            <p className='titulo-testimonio'>
              {post.titulo} </p> 
      
        

            <Rating />
            <p className='texto-testimonio'>"{post.contenido}"</p>
            <p className="comuna"> {post.usuario.comuna.nombreComuna}</p>
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