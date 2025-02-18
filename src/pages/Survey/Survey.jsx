import { useEffect, useState, useContext } from 'react';
import{ useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors.js';
import { Loader } from '../../utils/style/Atoms.jsx';
import { SurveyContext } from '../../utils/context/index.jsx';



const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
    margin: 30px;
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`


const Survey = () => {

    const {questionNumber} = useParams();
    // verification if the questionNumber is a number
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1: questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    const {answers, saveAnswers} = useContext(SurveyContext)

    function saveReply(answer) {
        saveAnswers({[questionNumber]: answer})
        console.log(answer)
    }   
    // Cette syntaxe permet aussi bien de faire des calls API.
  // Mais pour utiliser await dans une fonction, il faut que celle-ci soit async (pour asynchrone).
  // Comme la fonction passée à useEffect ne peut pas être asynchrone,
  // il faut utiliser une fonction qui est appelée dans useEffect et déclarée en dehors, comme ici 👇.
  // Essayez de commenter le code créé dans le chapitre et de décommenter fetchData pour voir.

  // async function fetchData() {
  //   try {
  //     const response = await fetch(`http://localhost:8000/survey`)
  //     const { surveyData } = await response.json()
  //     setSurveyData(surveyData)
  //   } catch (error) {
  // console.log('===== error =====', error)
  // setError(true)
  //   }
  // }

useEffect(() => {
    // fetchData()
    async function fetchSurvey() {
        setDataLoading(true)
        try {
            const response = await fetch(`http://localhost:8000/survey`)
            const { surveyData } = await response.json()
            setSurveyData(surveyData)
        }
        catch (err) {
            console.log(err, error)
            setError(true)
        }
        finally {
            setDataLoading(false)
        }
    }
    fetchSurvey()
}
, [error])

if (error) {
    return <span>Oups il y a eu un problème</span>
}

    // useEffect(() => {
    //     // fetchData()
    //     setDataLoading(true)
    //     fetch(`http://localhost:8000/survey`)
    //         .then((response) => response.json()
    //         .then(({ surveyData }) => {
    //             setSurveyData(surveyData) 
    //             setDataLoading(false)
    //         })
    //         .catch((error) => console.log(error))
    //     )
    // }, [])



    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <Loader />
            ) : (
            <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            )}
            <ReplyWrapper>
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                >
                    Oui
                </ReplyBox>
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Pécédent</Link>
                {surveyData[questionNumberInt +1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}
export default Survey;