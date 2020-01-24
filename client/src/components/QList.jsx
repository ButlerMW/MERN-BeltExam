import React, { useEffect, useState} from 'react'
import Axios from 'axios';

export default props => {
    const [ questions, setQuestions ] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/trivia")
            .then(res => {
                console.log("do you see me")
                setQuestions(res.data);
                console.log(questions);
                for(let i = questions.length-1; i > 0; i-- ){
                    const j = Math.floor(Math.random() * (i + 1));
                    const temp = questions[i];
                    questions[i] = questions[j];
                    questions[j] = temp;
                    console.log(questions);
                }
            });
    }, [])

    return (
        <div>
            {questions.map((question, idx) => {
                return (
                    <div key={idx}>
                        <p>{question.question}</p>
                        <input type="button" value={question.answer}/>
                        <input type="button" value={question.fake1}/>
                        <input type="button" value={question.fake2}/>
                    </div>
                )
            })}
        </div>
    )
        
    
}