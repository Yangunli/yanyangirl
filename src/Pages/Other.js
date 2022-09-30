import React from "react";
import "../App.css";
import { Grid } from "@mui/material";
import SingleContent from "../components/SingleContent";
import { THMExp, EastExp, WSExp, CTExp } from "../components/datasets";

const Other = () => {
  const exhibition = [...THMExp, ...CTExp, ...WSExp];

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
        sx={{ marginTop: { xs: "8rem", sm: "9rem", md: "10rem", lg: "10rem" } }}
      >
        <Grid container spacing={5}>
          {exhibition?.map((exp) => (
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