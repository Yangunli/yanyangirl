import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const city = [
    {
      EnName: "TAIPEI",
      name: "臺北",
      src: "/yanyangirl/",
    },
    {
      EnName: "TAICHUNG",
      name: "臺中",
      src: "/yanyangirl/taichung",
    },
    {
      EnName: "TAINAN",
      name: "臺南",
      src: "/yanyangirl/tainan",
    },
    {
      EnName: "OTHER",
      name: "其他",
      src: "/yanyangirl/other",
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
            <dd>將日常所關注的創作者及展覽空間們的活動，匯集而成的展覽提案!</dd>
          </dl>
          <hr />
        </div>
        <div className="footer-navigation-city">
          <div className="cityList">
            {city.map((c) => (
              <Link
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
          <hr />
        </div>

        <div className="referance">
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
          <small>
            部分資料引用自
            <a href="https://data.gov.tw/en/datasets/128616">
              「臺北市文化快遞資訊」
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
