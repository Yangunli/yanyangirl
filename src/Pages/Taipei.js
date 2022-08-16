import "../App.css";
import { taipeiExp } from "../components/data";
import { Grid } from "@mui/material";
import SingleContent from "../components/SingleContent";

const Taipei = () => {
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
          {taipeiExp.map((exp, i) => (
            <SingleContent key={exp.i} exp={exp} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Taipei;
