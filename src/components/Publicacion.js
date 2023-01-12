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
        <div className='contenedor-testimonio'>
          <img
            className='imagen-testimonio'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Beagle_Faraon.JPG/1200px-Beagle_Faraon.JPG"
            alt='Foto de Cori' />

          <div className='contenedorTextoTestimonio'>
            <br></br>
            <br></br>
            <p className='tituloTestimonio'>
            Se regalan perritos beagle </p> 
      
        

            <Rating />
            <p className='textoTestimonio'>""Se regalan perritos vacunados y esterelizados""</p>
            <p className="comuna"> Casablanca, El Greco #1324</p>
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
  </div>
  )
}

export default Publicacion;