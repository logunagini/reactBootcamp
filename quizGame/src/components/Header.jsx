
import logoimg  from '../assets/quiz-logo.png';

export default function Header()
{
    return (
        <header>
        <img src={logoimg}/>
        <h1>QuizGame</h1>
        </header>  

    );
}