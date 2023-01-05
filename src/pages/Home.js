import React from "react";
import { CarouselComponent, Navbar, SectionBody } from "../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="all">
      <Navbar />
      <CarouselComponent />
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
    </div>
  );
};

export default Home;
