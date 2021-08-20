import React, {useEffect} from 'react'
import Axios from 'axios';


function Favorite({movieInfo, movieId, userFrom}) {
    const movieTitle = movieInfo.movieTitle;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    const [FavoriteNo, setFavoriteNo] = useState(0);
    const [IsFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        let vars = {
            userFrom,
            movieId
        }
        Axios.post('/api/favorite/favoriteNo', vars)
        .then(response => {
            if(response.data.success) {
                console.log(response.data);
                setFavoriteNo(response.data.favoriteNo);
            } else {
                alert('숫자 정보를 가져오는데 실패했습니다.')
            }
        })
        Axios.post('/api/favorite/favorited', vars)
        .then(response => {
            if(response.data.success) {
                console.log(response.data.isFavorited);
                setIsFavorited(response.data.isFavorited);
            } else {
                alert('즐겨찾기 정보를 가져오는데 실패했습니다.')
            }
        })
    }, [])

    return (
        <>
            <button> {Favorite ? "Favorited" : "Favorite?"} {Favorite}</button>
        </>
    )
}

export default Favorite
