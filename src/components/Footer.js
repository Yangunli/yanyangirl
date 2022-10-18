import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
const Footer = () => {
  const city = [
    {
      EnName: "TAIPEI",
      name: "臺北",
      src: "/",
    },
    {
      EnName: "TAICHUNG",
      name: "臺中",
      src: "/taichung",
    },
    {
      EnName: "TAINAN",
      name: "臺南",
      src: "/tainan",
    },
    {
      EnName: "OTHER",
      name: "其他",
      src: "/other",
    },
  ];
  function scrollWin() {
    window.scroll(0, 0);
  }
  return (
    <div className="footer-navigation">
      <div className="container">
        <div className="footer-navigation-top">
          <dl className="footer-navigation-areaList">
            <dt>
              <span className="footer-logo">YANYANGIRL</span>
            </dt>
            <dd>致力於成為想到看展，即能被聯想的存在的展覽推薦清單</dd>
          </dl>
          <Divider />
        </div>
        <div className="footer-navigation-city">
          <div className="cityList">
            {city.map((c) => (
              <Link
                key={c.EnName}
                to={c.src}
                style={{
                  textDecoration: "none",
                  fontFamily: '"Noto Serif TC", serif',
                  color: "inherit",
                  margin: "1rem",
                  width: "100%",
                }}
                onClick={scrollWin}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    borderLeft: "2px solid black",
                  }}
                >
                  {c.EnName}
                </p>
              </Link>
            ))}
          </div>
          <Divider />
        </div>
        <div className="referance">
          <div className="referance-link">
            <small>
              <a href="https://icons8.com/icon/103661/circled-menu">
                Circled Menu
              </a>
              icon by Icons8
            </small>
            <small>
              <a href="https://icons8.com/icon/HOsRsGt3t2Hk/bubble-tea">
                Bubble Tea
              </a>
              icon by Icons8
            </small>
          </div>
          <nav>
            {" "}
            <a
              href="https://www.instagram.com/yanyangirl_tw/"
              className="social-icons"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-512.png"
                alt="myIgLink"
              />
            </a>
          </nav>

          <Divider />
        </div>
      </div>
    </div>
  );
};

export default Footer;
