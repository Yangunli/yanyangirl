import React, { useState } from "react";
import "../App.css";
import { Box, Divider } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const city = [
  {
    name: "臺北",
    src: "/yanyangirl/",
  },
  {
    name: "臺中",
    src: "/yanyangirl/taichung",
  },
  {
    name: "臺南",
    src: "/yanyangirl/tainan",
  },
  {
    name: "其他",
    src: "/yanyangirl/other",
  },
];

export default function Sidebar() {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : "40vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "rgba(251, 226, 196, 0.2)",
      }}
    >
      <div className="logo2">
        <p>YANYANGIRL</p>
      </div>
      <Divider />
      <List className="sidebar">
        {city.map((c) => (
          <Link
            to={c.src}
            style={{
              width: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={c.name}
                  style={{ textAlign: "center" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div
      style={{
        display: "grid",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        minWidth: "100%",
      }}
    >
      {["left"].map((anchor, i) => (
        <React.Fragment key={anchor.i}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFWElEQVR4nO2cbUyVZRiAr4eDiBApLIEUOQio2Un8QNKROFubZqOAPnDmmmW5lrP+JLXc1GqzTNfsV6t0aZu2RWuC1dioufzeRERbqHGw+BKQ41Rycw445+nHARG/OOflfc8Or/f162zwXHC4OV/vc+0BQRAEQRAEQRAEQRAEQRAEQRAEQQghyiqxy+WKunpNFyqtClHMAlJ6v9SC5oRWuiwuRpXV1tZ23S/uQLBkIM70x55H6y1A+j2/UXMOrUoaG//aY3d3oJg9kAjnRNcmoARgijOZ4oU5zJuZSUpiPAAtHZc5VFNPaWUVfze2+38JxeaGf2o/AHw2dAeFqQNxTnRtBkpGRDpYt/JZli2eQ0TEnX+E16vZVXGUjdt/pbvH23fn3rebO1hMG0jvw/2nEZEOdn68gtysjIDWHT5Vz2sbdvjvnPYVNTScKbOL2wgOMyQulyuqq5tyIP7DNwvIz8sKeG1qcgJxsdHsr64DpWZnZqR+1dbWduMpYLi6jRIxVAHA1Wu6EEif4kzm5afnBL3+lWdymZyaBJDpuXS9wA5uo5gyEKVUEcCSRY/jcAT/LOhwKIoX5fhdqEI7uI1iykDQzAKYNyPTsKJ/rZ5tC7dBzBkIjAMYlzjGsKDv7SUw3iZuQ5g1ED9aD2HpjbV3fmEcru4gMWsgrQCtnk7DgvOeK30322ziNoRZryHHAQ6eqDOsONC/9pgt3AYxZSBa6XKAHyqr8HqDf/h7vZoffzvud8FeO7iNYspA4mJUGZpzdU0X2FVxNOj13/1yBHdTBxrcYxOiy+3gNoopn9Q9Ho93zOikZhRLDp+sZ9ZUJ6nJCQGtPXTSzZqtpfi01hpWnD196owd3EYxZSAAnZ0dZ+MTEmO8Pv3EzwdOERcbzbTMCXe9SNfj87Fz7xHWbC2lx+tDaz5rbqj90k5uI5h++T0t3fWp1rwHMDk1ieJFOcybkUlKkv8/r+XCJQ7WuCmtrMLd1AGge6+YrmWQS+TD1B0UlmxQpaVNLdQqYgtwz4/AGtwRWpc0NJwO+Pl3uLoDxbIt3Ozs7BGeS9cL/Nd4dDb9W6HNoKs1qnxsQnR5dXV19/3iFgRBsBmSAYXQHQiSAYXIHSiSAVnvDgrJgCx2B4tkQHdwd3X3sLviGHv3n6SusR2lFJOdSRQsmMGyxXOIdDgkAwqVu/3ifyxd+w2dV6/x9tKnWLcynzeK8siYkEj5vhq27TnEwrmP8kjaw5IBWe3u6u5hxUc7yJ+fxbb1y5k7LZ2Y6ChiR40kNyuD7RteJX9+Fl/s/n1Qt1HMyYC0P4EpXphjfqpjpfuWDGh3xTHGjx3DqpeevKvvrRcXsHF10aBuo5izhavIBsibOcmw4q45jZXuWzKg8j9qeL0ob1Bfc/tllq//9t5ug0gGdJO7vukC0yalMBhxsSP5090ymNsQZg3EvyE9hJzmNldo3Nzs/uSdF4iNjhpUMvqBUcQ/GNu7NDwzoDYYWk7T0nG572ZrCN0DMqDn5k8PyKeUYt/X7wI2zoAO1rj7ZFXh7l696fsb+Y9tM6DSSv/fSqMG7MKFm/vf1ouc91whd3qGZEDh4J447iH2fL6KSIdDMqDh5DaKZECSAYVlqiMZEIRfqiMZUBimOpIBCYIgBIxkQCF0B4JkQCFyB4pkQNa7g0IyIIvdwSIZkJwGNJBwy4DMchtFMiA5Deh25DSgfuQ0IKvcBpEMyDq3IeQ0IKvdQSKnAVnnNkTYZEByGpCfsMmA5DQgP5IByWlAA5EMaCCSAUkGFJapjmRAEH6pjmRAYZjqSAYkCIIgCIIgCIIgCIIgCIIgCIIg3Ff8D+TDBQ6xu0CZAAAAAElFTkSuQmCC"
              alt="icon"
              style={{ width: "80%" }}
            />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            className="sidebar"
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
