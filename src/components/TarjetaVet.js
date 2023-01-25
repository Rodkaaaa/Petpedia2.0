import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
/* import data from "./data.json"; */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import "./Card.css";
import { SportsEsports } from "@mui/icons-material";


const TarjetaVetComponent = ({
    Posts,
    searchName,
    setPostEditado,
    useEffects,
    infoText,
  }) => {
    const [busqueda, setBusqueda] = useState("");
  
    const handleChange = (e) => {
      setBusqueda(e.target.value);
      filtrar(e.target.value);
    };
  
    const filtrar = (terminoBusqueda) => {
      var resultadosBusqueda = searchName.filter((elemento) => {
        if (
          elemento.titulo
            .toString()
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase()) ||
          elemento.contenido
            .toString()
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase())
        ) {
          return elemento;
        }
      });
      setPostEditado(resultadosBusqueda);
    };
  
    useEffect(() => {}, [useEffect]);

    return (
        <div className="all">
      <div className="barraTitulo">
        <div className="buscar">
        <div className="texto">
          <h1 className="titulo">{infoText}</h1>
        </div>
          <TextField
            className="search"
            id="outlined-basic"
            variant="outlined"
            label="Search"
            onChange={handleChange}
            value={busqueda}
          />
        </div>
      </div>
      <div class="grid">
        <hr />
        <div class="row casillas responsive">
          {searchName &&
            Posts.map((post) => (
              <div class="col">
                <Card sx={{ maxWidth: 300 }} className="card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.url}
                    alt="no_image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <a href="*" className="boton">
                      {post.usuario.comuna.nombreComuna}-{post.usuario.comuna.provincia.region.nombreRegion}
                      </a>
                      <hr />
                      {post.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Ubicacion: {post.ubicacion}
                      <br />
                      <hr />
                      Horario:{post.horario} -{" "}<br />
                      Contacto: {post.contacto}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Compartir</Button>
                    <Button size="small">Leer mas</Button>
                  </CardActions>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
        
export default TarjetaVetComponent;
