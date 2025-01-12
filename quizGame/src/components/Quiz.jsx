import {useState} from 'react';
import QUESTIONS from './Data.jsx';
import QuestionTimer from './QuestionTimer.jsx';
export default function Quiz()
{
    const [userAnswers,setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    function handleSelectAnswer(selectedAnswer)
    {
        setUserAnswers((prevUserAnswers)=>{
            return [...prevUserAnswers,selectedAnswer];
        });
    }
    return (
        <div id='quiz'>
            <div id="question">
                <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)}/>
                <h2>{QUESTIONS[activeQuestionIndex].question}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].options.map((item)=>(
                        <li key={item} className='answer'>
                            <button onClick={()=>handleSelectAnswer(item)}>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}