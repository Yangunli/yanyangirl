import { useId } from "react";
import "../App.css";
import { tainanExp } from "../components/data";
import { Grid } from "@mui/material";
import SingleContent from "../components/SingleContent";

const Tainan = () => {
  const id = useId();
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
        sx={{
          marginTop: {
            xs: "9rem",
            sm: "11rem",
            md: "11rem",
            lg: "12rem",
            xl: "12rem",
          },
        }}
      >
        <Grid container spacing={5}>
          {tainanExp.map((exp) => (
            <SingleContent key={id} exp={exp} artiist={exp.artist} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tainan;
