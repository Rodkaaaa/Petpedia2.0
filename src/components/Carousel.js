import React from 'react';


const CarouselComponent = () => {
    return (
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/4921291/pexels-photo-4921291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/4560155/pexels-photo-4560155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
    );
}

export default CarouselComponent;






{/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
  </ol>
  <div class="carousel-inner active">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"/>
    </div>
    <div class="carousel-item active ">
      <img class="d-block w-100" src="https://images.pexels.com/photos/4921291/pexels-photo-4921291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide"/>
    </div>
    <div class="carousel-item active ">
      <img class="d-block w-100" src="https://images.pexels.com/photos/4560155/pexels-photo-4560155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselPrev" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselNext" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}