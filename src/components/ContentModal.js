import React from "react";
import "../App.css";
import { Divider, Typography } from "@mui/material";
const ContentModal = ({ exp }) => {
  return (
    <div>
      <div className="ContentModal">
        <div className="ContentModal__about">
          <Typography variant="h5" color="text.secondary">
            {exp?.name}
          </Typography>
          <small> {exp?.time}</small>
        </div>
        <div className="ContentModal__about">
          <Typography variant="body2" color="text.secondary">
            {exp?.artist}
          </Typography>
        </div>

        <Typography variant="subtitle1" color="text.secondary">
          活動資訊
        </Typography>
        <Divider />
        <div className="ContentModal__about">
          <div className="Info">
            <small>{exp?.venue} </small>
          </div>
          {exp?.location && (
            <div className="Info">
              <small>{exp.location}</small>
            </div>
          )}
          {exp?.TicketType && (
            <div className="Info">
              <small>活動票價</small>
              <small>{exp.TicketType}</small>
            </div>
          )}
          {exp?.openDay && (
            <div className="Info">
              <small>營業日</small>
              <small>{exp.openDay}</small>
            </div>
          )}
          <div className="Info">
            <small>相關連結</small>
            <small>
              <a
                href={exp.link || exp.WebsiteLink}
                alt={exp.name || exp.Caption}
              >
                活動網址
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
