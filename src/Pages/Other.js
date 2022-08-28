import React from "react";
import "../App.css";
import { Grid } from "@mui/material";
import SingleContent from "../components/SingleContent";
import { datasets } from "../components/datasets";

const Other = () => {
  const exhibition = datasets.filter((d) => d.Category === "展覽");

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
        lg={9}
        md={9}
        sx={{ marginTop: { xs: "6rem", sm: "8rem", md: "10rem", lg: "10rem" } }}
      >
        <Grid container spacing={5}>
          {exhibition.map((exp) => (
            <SingleContent
              key={exp.ID}
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

export default Other;
