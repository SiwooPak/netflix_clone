import React from 'react'

function MovieDetailPage(props) {
    const movieId = props.match.params.movieId;
    useEffect(() => {
        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
        return () => {
            cleanup
        }
    }, [input])
    return (
        <div>
            
        </div>
    )
}

export default MovieDetailPage
