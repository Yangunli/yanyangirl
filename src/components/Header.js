import React from "react";
import "../App.css";
import Sidebar from "./Sidebar";
import "../icons/twicon.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const city = [
  {
    name: "臺北",
    src: "/",
  },
  {
    name: "臺中",
    src: "/taichung",
  },
  {
    name: "臺南",
    src: "/tainan",
  },
  {
    name: "其他",
    src: "/other",
  },
];

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      className="header"
      onClick={() => window.scroll(0, 0)}
    >
      <Grid
        xs={3}
        sm={3}
        sx={{ display: { xs: "block", md: "none" }, Height: "100%" }}
      >
        <Sidebar />
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="logo">YANYANGIRL</div>
        </Link>
      </Grid>
      <Grid
        sm={3}
        lg={3}
        sx={{ display: { xs: "none", md: "block" }, Height: "100%" }}
      >
        <div className="right">
          {city.map((c) => (
            <Link
              to={c.src}
              style={{
                width: "100%",
                textDecoration: "none",
                fontFamily: '"Noto Serif TC", serif',
                color: "inherit",
              }}
            >
              <div
                style={{
                  textDecoration: "underline",
                  writingMode: "vertical-lr",
                  fontSize: "1.5rem",
                }}
              >
                {c.name}
              </div>
            </Link>
          ))}
          {/* <i class="twicon-taiwanese-bag" style={{ fontSize: "3rem" }} /> */}
        </div>
      </Grid>
      <Grid item xs={3} sm={3} lg={3}></Grid>
    </Grid>
  );
};

export default Header;
