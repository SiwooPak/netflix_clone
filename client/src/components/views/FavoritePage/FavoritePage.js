import React, {useState, useEffect} from 'react'
import './favorite.css';
import styled from 'styled-components';
 
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
        Axios.post('/api/favorite/getFavoritedMovie', {userFrom: localStorage.getItem('userId')})
        .then(response => {
            if(response.data.success) {
                console.log(response.data.results);
                setFavorites(response.data.results);
            } else {
                alert('영화정보를 가져오는데 실패했습니다.')
            }
        })
        return () => {
            cleanup
        }
    }, [input])
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
                    {
                        Favorites.map((favorite, idx)=> {
                            <tr key={idx}>
                                <td>{favorite.movieTitle}</td>
                                <td>{favorite.movieRunTime}</td>
                                <td><button>Remove</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table> 
            
        </Favorite_Div>
    )
}

export default FavoritePage
