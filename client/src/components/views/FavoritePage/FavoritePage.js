import React, {useState, useEffect} from 'react'
import './favorite.css';
import styled from 'styled-components';
import {Popover} from 'antd';
import {IMAGE_BASE_URL} from '../../Config' 
export const Favorite_Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%

    > td,th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    > tr:nth-child(even) {
        background-color: #dddddd;
    }
`;

export const Favorite_Div = styled.div`
    width: 85%;
    margin: 3rem auto;
`;

function FavoritePage() {
    const [Favorites, setFavorites] = useState([]);
    useEffect(() => {
        fetchFavoritedMovie();
    }, [])

    const fetchFavoritedMovie = () => {
        Axios.post('/api/favorite/getFavoritedMovie', {userFrom: localStorage.getItem('userId')})
        .then(response => {
            if(response.data.success) {
                console.log(response.data.results);
                setFavorites(response.data.results);
            } else {
                alert('영화정보를 가져오는데 실패했습니다.')
            }
        })
    }

    const onDelete = (movieId, userFrom) => {
        const vars = {
            movieId,
            userFrom
        }
        Axios.post('/api/favorite/removeFromFavorite', vars)
            .then( response => {
                if(response.data.success) {
                    fetchFavoritedMovie();
                }else{
                    alert('리스트에서 지우는데 실패했습니다.')
                }
            })
    }
    const renderCards = Favorites.map((favorite, idx)=> {
        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} />
                    : "no image"
                }
            </div>
        )

        return <tr key={idx}>
            <Popover 
                content={content}
                title={`${favorite.movieTitle}`}
            >
                <td>{favorite.movieTitle}</td>
            </Popover>
            <td>{favorite.movieRunTime}</td>
            <td>
                <button onClick={()=>onDelete(favorite.movieId, favorite.userfrom)}>Remove</button>
            </td>
        </tr>
    })

    return (
        <Favorite_Div>
            <h2>Favorite Movies</h2>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie Runtime</th>
                        <td>Remove from favorites</td>
                    </tr>
                </thead>
                <tbody>
                  <renderCards />
                </tbody>
            </table> 
            
        </Favorite_Div>
    )
}

export default FavoritePage
