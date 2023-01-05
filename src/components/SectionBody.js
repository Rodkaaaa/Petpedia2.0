import * as React from "react";
import "./SectionBody.css";
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
                  image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
                  alt="img not found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
                  image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
                  alt="img not found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
                  image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
                  alt="img not found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
                  image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
                  alt="img not found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
