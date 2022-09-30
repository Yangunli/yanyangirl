import React from "react";
import "../App.css";
import { taichungExp } from "../components/data";
import { Grid } from "@mui/material";
import SingleContent from "../components/SingleContent";

const Taichung = () => {
  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      style={{
        marginTop: "1.5px",
        backgroundColor: "rgba(236, 220, 194,0.6)",
        minHeight: "100vh",
        paddingBottom: "5rem",
      }}
    >
      <Grid
        item
        xs={9}
        lg={10}
        md={10}
        sx={{ xs: "10rem", sm: "10rem", md: "11rem", lg: "12rem", xl: "12rem" }}
      >
        <Grid container spacing={5}>
          {taichungExp.map((exp) => (
            <SingleContent
              key={exp.src}
              id={exp.ID}
              exp={exp}
              artiist={exp.artist}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Taichung;
