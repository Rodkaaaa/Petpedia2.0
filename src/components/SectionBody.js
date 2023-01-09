import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";


import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SectionBody = () => {
  return (
    <div className="section">
    <Box sx={{ flexGrow: 1 }}>
      <Grid  container spacing={6}>
        <Grid  xs={3} md={3}>
          <Item className="box">
            <Card className="card" sx={{ maxWidth: 800 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.linkpicture.com/q/articulo3.png"
                  alt="img not found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vacunas al día
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ¿Sabes precisamente que hace cada vacuna de tu mascota?
                    Los avances de la ciencia nos indican grandes descubrimientos en materia de medicina veterinaria
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={3} md={3}>
          <Item className="box">
            <Card className="card" sx={{ maxWidth: 800 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.linkpicture.com/q/articulo4.png"
                  alt="img not found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dieta BARF
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  ¿Es realmente la dieta ideal para nuestras mascotas? Descubre todos sus beneficios
                  en el siguiente artículo
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={3} md={3}>
          <Item className="box">
            <Card className="card" sx={{ maxWidth: 800 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.linkpicture.com/q/articulo5.png"
                  alt="img not found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vida indoor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    La importancia de mantener a nuestras mascotas en espacios seguros y controlados
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={3} md={3}>
          <Item className="box">
            <Card className="card" sx={{ maxWidth: 800 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://www.linkpicture.com/q/articulo6.png"
                  alt="img not found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tratamiento oncológico
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Existen alternativas para prolongar y garantizar la calidad de vida de tu mascota
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default SectionBody;
