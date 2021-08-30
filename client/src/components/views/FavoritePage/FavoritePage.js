import React from 'react'
import styled from 'styled-components';

export const Table = styled.table`
table{
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%
}
td,th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #dddddd;
}
`;

function FavoritePage() {
    return (
        <div style={{width: '85%', margin: '3rem atuo'}}>
            <h2>Favorite Movies</h2>
            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie Runtime</th>
                        <td>Remove from favorites</td>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table> 
            
        </div>
    )
}

export default FavoritePage
