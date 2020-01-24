import React from 'react';
import Axios from 'axios';

export default props => {
    const { gameId, successCallback } = props;
    const deleteGame = e => {
        Axios.delete("http://localhost:8000/api/game/delete/" + gameId)
            .then(res => {
                if(window.confirm("You sure you sure you want to get rid of your crappy score?")){
                    successCallback();
                }
            })
    }


    return (
        <div>
            <button onClick={deleteGame}>
                Delete
            </button>
        </div>
    )
}