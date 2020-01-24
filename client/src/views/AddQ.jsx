import React, { useState } from "react";
import Links from "../components/Links";
import Axios from "axios";
import { navigate, Link } from "@reach/router";
// import {  } from "module";


export default props => {
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [fake1, setFake1] = useState();
    const [fake2, setFake2] = useState();
    const [errors, setErrors] = useState([])

    const onSubmitHandler = e => {
        e.preventDefault();

        Axios.post("http://localhost:8000/api/trivia/new", {
            question,
            answer,
            fake1,
            fake2
        })
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    };

    return (
        <div>
            <div>
                <Links />
            </div>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, idx) => <p key={idx}>*{err}</p>)}
                <p>
                    <label>Question</label>
                    <input 
                        type="text"
                        name="question"
                        value={question}
                        onChange={e => setQuestion(e.target.value)} />
                </p>
                <p>
                    <label>Correct Answer</label>
                    <input 
                        type="text"
                        name="answer"
                        value={answer}
                        onChange={e => setAnswer(e.target.value)} />
                </p>
                <p>
                    <label>Fake Answer 1</label>
                    <input 
                        type="text"
                        name="fake1"
                        value={fake1}
                        onChange={e => setFake1(e.target.value)} />
                </p>
                <p>
                    <label>Fake Answer 2</label>
                    <input 
                        type="text"
                        name="fake2"
                        value={fake2}
                        onChange={e => setFake2(e.target.value)} />
                </p>
                <Link to={"/"}>Cancel</Link>
                <input type="submit" value="Add Question"/>
            </form>
        </div>
    )
}