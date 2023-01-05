import React,{useCallback} from "react";
import {
  CarouselComponent,
  Navbar,
  SectionBody,
  FooterComponent,
} from "../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="all">
      <Navbar />
      <div className="carousel"> 
      <CarouselComponent/>
      </div>
      <br />
      <br />

      <div className="completeSection">
        <div className="texto">
          <h2 className="tituloSection">Artículos de interés </h2>
          <p className="textSection">
            Los especialistas nos entregan todo su conocimiento
          </p>
        </div>
        <div className="section ">
          <SectionBody />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Home;
