import React,{useState, useEffect} from 'react'
import {API_URL,API_KEY,IMAGE_BASE_URL} from '../../Config'
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './sections/MovieInfo';
function MovieDetailPage(props) {
    const movieId = props.match.params.movieId;
    const [Movie, setMovie] = useState([]);
    useEffect(() => {
        const endpointCast = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        fetch(endpointInfo)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMovie(data)
        })
        
    }, [Movie])
    return (
        <div>
            {/* header */}
            <MainImage 
                    image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                    title={Movie.original_title}
                    text={Movie.overview}
                />
            {/* body */}
            <div style={{width:'85%', margin:'1rem auto'}}>
                {/* movie info */}
                <MovieInfo movie={Movie}/>
                <br />
                {/* actors grid */}
                <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                    <button>Toggle Acror View</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailPage
