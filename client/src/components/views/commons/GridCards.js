import React from "react";
import { Col } from "antd";

function GridCards(props) {
  // console.log(props.movieId)
  if (props.landingPage) {
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <a href={props.movieId}>
            <img
              style={{ width: "100%", height: "320px" }}
              src={props.img}
              alt={props.movieName}
            />
          </a>
        </div>
      </Col>
    );
  } else {
    return (
      props.img !== null && (
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "320px" }}
              src={props.img}
              alt={props.actorName}
              title={props.actorName}
            />
          </div>
        </Col>
      )
    );
  }
}

export default GridCards;
