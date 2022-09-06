import React, { useState } from "react";
import "../App.css";
import { Card, Grid, Modal, Box, Fade, Backdrop } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContentModal from "./ContentModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "rgb(230, 201, 147)",
  color: "white",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 20,
  p: 4,
};

const SingleContent = ({ exp }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 410 }}>
        <CardMedia
          component="img"
          height="194"
          image={exp.src || exp.ImageFile}
          alt={exp.name || exp.Caption}
          onClick={handleOpen}
        />

        <CardContent onClick={handleOpen}>
          <Typography variant="h6" color="text.secondary">
            {exp.name || exp.Caption}
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            {exp.venue || exp.Venue}
          </Typography>
        </CardContent>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>{exp && <ContentModal exp={exp} />}</Box>
          </Fade>
        </Modal>
      </Card>
    </Grid>
  );
};

export default SingleContent;
