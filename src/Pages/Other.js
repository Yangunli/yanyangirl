import { useId } from "react";
import "../App.css";
import { Grid } from "@mui/material";
import SingleContent from "../components/SingleContent";
import {
  THMExp,
  KeXinExp,
  WSExp,
  CTExp,
  EastExp,
} from "../components/datasets";

const Other = () => {
  const totalExhibitions = [
    ...EastExp,
    ...KeXinExp,
    ...THMExp,
    ...CTExp,
    ...WSExp,
  ];
  const exhibition = totalExhibitions.filter(
    (exhibit) => new Date(exhibit.time.split("-")[1]) > new Date()
  );
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
          {exhibition?.map((exp) => (
            <SingleContent
              key={`other${exp.name}-${id}`}
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
