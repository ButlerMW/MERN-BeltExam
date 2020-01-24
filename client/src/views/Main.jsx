import React, { useState, useEffect } from "react";
import Links from "../components/Links";
import { Link } from "@reach/router";
import Axios from "axios";
import DeleteButton from "../components/DeleteButton";


export default () => {
    
    const [ game, setGame ] = useState([]);
        useEffect(() => {
            Axios.get("http://localhost:8000/api/game")
                .then(res => setGame(res.data));
        }, [])
    
    const removeFromDom = gameId => {
        setGame(game.filter(game => game._id != gameId))
    }
 
    return (
        <div>
            <Links />
            <Link to={"/lets_play"}>Play</Link>
            <p>Click the button above to start the trivia game!</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Percentage</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {game.map((game, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{game.name}</td>
                            <td>{game.score}/3</td>
                            <td>{Math.trunc(game.score / 3) * 100}%</td> 
                            <td><DeleteButton gameId={game._id} successCallback={() => removeFromDom(game._id)} /></td> 
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}