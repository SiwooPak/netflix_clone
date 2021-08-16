import React from "react";
import { Descriptions, Badge } from "antd";

function MovieInfo({movie}) {
  return (
    <Descriptions title="Movie Info" bordered>
      <Descriptions.Item label="Title">
        {movie.original_title}
      </Descriptions.Item>
      <Descriptions.Item label="Release_date">
        {movie.release_date}
      </Descriptions.Item>
      <Descriptions.Item label="Revenue">{movie.revenue}</Descriptions.Item>
      <Descriptions.Item label="Runtime">{movie.runtime}</Descriptions.Item>
      <Descriptions.Item label="Vote_average" span={2}>
        {movie.vote_average}
      </Descriptions.Item>
      <Descriptions.Item label="Vote_count">
        {movie.vote_count}
      </Descriptions.Item>
      <Descriptions.Item label="Status">{movie.status}</Descriptions.Item>
      <Descriptions.Item label="Popularity">
        {movie.popularity}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default MovieInfo;
