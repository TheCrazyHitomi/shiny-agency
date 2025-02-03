import{useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Survey = () => {
    const {questionNumber} = useParams();

    // verification if the questionNumber is a number
    const questionNumberInt = parseInt(questionNumber);


    const prevQuestionNumber = questionNumberInt === 1 ? 1: questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;


    return (
        <div>
            <h1>Questionnaire 📝</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNumber}`}>Pécédent</Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            )}
            
        </div>
    )
}
export default Survey;