import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <header>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="https://github.com/Rodkaaaa/Petpedia/blob/main/petpedia/src/main/resources/static/img/LogosPetpediaBlanco-05.png?raw=true" alt="Logo" width="30" height="24" class="align-text-top"/>
        Petpedia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link ms-5" aria-current="page" href="#">Veterinarias</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link" href="#">Publicaciones</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link" href="#">Nosotros</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
  )
}

export default Navbar;