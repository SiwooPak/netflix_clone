import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import { Row } from "antd";
import MainImage from "./Sections/MainImage";
import GridCards from "../commons/GridCards";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  }, []);
  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setMovies([...Movies, ...data.results]);
        if(MainMovieImage === null) setMainMovieImage(data.results[0]);
        setCurrentPage(data.page);
      })
      .catch((err) => console.log(err));
  };
  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };
  return (
    <>
      <div style={{ width: "100%", margin: "0" }}>
        {/* Movie Image */}
        {MainMovieImage && (
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
          />
        )}
        <div style={{ width: "85%", margin: "1rem auto" }}>
          <h2>인기 영화</h2>
          <hr />
          {/* Movie Grid Card */}
          <Row gutter={[16, 16]}>
            {Movies &&
              Movies.map((movie, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    img={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </React.Fragment>
              ))}
          </Row>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreItems}>Load More</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
