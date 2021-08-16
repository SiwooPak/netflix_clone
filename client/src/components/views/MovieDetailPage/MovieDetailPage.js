import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./sections/MovieInfo";
import GridCards from "../commons/GridCards";
import { Row } from "antd";

export default function MovieDetailPage(props) {
  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [Actors, setActors] = useState([]);
  const [IsView, setIsView] = useState(false);
  useEffect(() => {
    const endpointCast = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    fetch(endpointInfo)
      .then((response) => response.json())
      .then((data) => {
        //onsole.log(data);
        setMovie(data);
      });
    fetch(endpointCast)
      .then((response) => response.json())
      .then((data) => setActors(data.cast));
  }, []);
  const toggleActor = () => setIsView(!IsView);
  return (
    <div>
      {/* header */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />
      {/* body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        {/* movie info */}
        <MovieInfo movie={Movie} />
        <br />

        {/* actors grid */}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <button onClick={toggleActor}>
            {IsView ? "Close Actors" : "Open Actors"}
          </button>
        </div>
        <Row gutter={[16, 16]}>
          {IsView &&
            Actors.map((actor, index) => (
              <React.Fragment key={index}>
                <GridCards
                  img={
                    actor.profile_path
                      ? `${IMAGE_BASE_URL}w500${actor.profile_path}`
                      : null
                  }
                  actorName={actor.name}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
}
