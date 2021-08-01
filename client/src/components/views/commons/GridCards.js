import React from "react";
import { Col } from "antd";

function GridCards(props) {
  // console.log(props.movieId)
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <a href={props.movieId}>
          <img style={{width: '100%', height: '320px'}} src={props.image} alt={props.movieName}/>
        </a>
      </div>
    </Col>
  );
}

export default GridCards;
