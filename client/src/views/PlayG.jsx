import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import faker from "faker";
import Axios from "axios";
import QList from "../components/QList"
import shuffle from 'shuffle-array'

export default props => {
    const [ name, setName ] = useState(faker.name.firstName)
    let [ score, setScore ] = useState(0);
    const [ points, setPoints ] = useState(0);
    // const [ rand1, set]
    const [ questions, setQuestions ] = useState([]);
        useEffect(() => {
            Axios.get("http://localhost:8000/api/trivia")
                .then(res => {
                    console.log("do you see me")
                    setQuestions(shuffle(res.data));
                    // for(let i = questions.length-1; i > 0; i-- ){
                        // const j = Math.floor(Math.random() * (i + 1));
                        // const temp = questions[i];
                        // questions[i] = questions[j];
                        // questions[j] = temp;
                        // console.log(questions);
                        // }
                    });
                // shuffle(questions)
                }, [])
                console.log(questions);
                console.log(questions);

    const onSubmitHandlerGame = e => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/game/new", {
            name,
            score
        })
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err, "ERROR SUBMITTING GAME"));
    } 

    const onSubmitAnswer = e => {
        score++;
        console.log(score)
        // score += points;
        // console.log(score)
    }

    // const onAddName = (e, name) => {
    //     // e.preventDefault();
    //     setName(e.target.value)
    //     console.log(name)
    //     // score += points;
    //     // console.log(score)
    // }
    return ( 
        <div>
            <form onSubmit={onSubmitHandlerGame}>
            <label>Hi  </label>
            <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)}
                />
            <p>Choose an answer for each of the questions and submit the test once done!</p>
            {questions.slice(0,3).map((question, idx) => {
                return (
                    <div key={idx}>
                        <p>{question.question}</p>
                        <div>
                            <input type="radio" value={1} onClick={e => onSubmitAnswer(1)}/>
                            <label>{question.answer}</label>
                        </div>
                        <div>
                            <input type="radio" value={0}/>
                            <label>{question.fake1}</label>
                        </div>
                        <div>
                            <input type="radio" value={0}/>
                            <label>{question.fake2}</label>
                        </div>
                    </div>
                )
            })}
            <Link to={"/"}>Cancel</Link>
            <input type="submit" />
            </form>
        </div>
    )
}

