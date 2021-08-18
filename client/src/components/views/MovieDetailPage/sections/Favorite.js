import React, {useEffect} from 'react'
import Axios from 'axios';


function Favorite({movieInfo, movieId, userFrom}) {
    const movieTitle = movieInfo.movieTitle;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    useEffect(() => {
        let vars = {
            userFrom,
            movieId
        }
        Axios.post('/api/favorite/favoriteNo', vars)
        .then(response => {
            if(response.data.success) {
                console.log(response.data);
                
            } else {
                alert('숫자 정보를 가져오는데 실패했습니다.')
            }
        })
    }, [])

    return (
        <div>
            <button>Favorite</button>
        </div>
    )
}

export default Favorite
