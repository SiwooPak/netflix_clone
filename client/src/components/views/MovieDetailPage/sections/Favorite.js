import React, {useEffect} from 'react'
import Axios from 'axios';
import {Button} from 'antd';

function Favorite({movieInfo, movieId, userFrom}) {
    const movieTitle = movieInfo.movieTitle;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    const [FavoriteNo, setFavoriteNo] = useState(0);
    const [IsFavorited, setIsFavorited] = useState(false);

    let vars = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime
    }
    useEffect(() => {
        
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
    const onClickFavorite = () => {
        if(IsFavorited) {
            Axios.post('/api/favorite/removeFromFavorite', vars)
            .then(response => {
                if(response.data.success) {
                    setFavoriteNo(FavoriteNo - 1)
                    setIsFavorited(!isFavorited)
                } else {
                    alert("favorite's list remove, failed!")
                }
            })
        } else {
            Axios.post('/api/favorite/addToFavorite', vars)
            .then(response => {
                if(response.data.success) {
                    setFavoriteNo(FavoriteNo + 1)
                    setIsFavorited(!isFavorited)
                } else {
                    alert("favorite's list add failed!")
                }
            })
        }
    }
    return (
        <>
            <Button onClick={onClickFavorite}> {Favorite ? "Favorited" : "Favorite?"} {Favorite}</Button>
        </>
    )
}

export default Favorite
