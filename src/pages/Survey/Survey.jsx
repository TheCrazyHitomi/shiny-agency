import {  useContext } from 'react';
import{ useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors.js';
import { Loader } from '../../utils/style/Atoms.jsx';
import { SurveyContext } from '../../utils/context/index.jsx';
import { useFetch, useTheme } from '../../utils/hooks/index.jsx';



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
    padding-top: 30px;
    & a {
        color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`

const ReplyBox = styled.button`
  border: none;
  height: 80px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: ${({ theme }) => 
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
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

    const { theme } = useTheme();

    const {questionNumber} = useParams();
    // verification if the questionNumber is a number
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1: questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;

    const { data, isLoading, error } = useFetch('http://localhost:8000/survey')
    const { surveyData } = data

    const {answers, saveAnswers} = useContext(SurveyContext)

if (error) {
    return <span>Oups il y a eu un problème</span>
}

    function saveReply(answer) {
        saveAnswers({[questionNumber]: answer})
        console.log(answer)
    }  

    return (
        <SurveyContainer>
            <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
            {isLoading ? (
                <Loader />
            ) : (
            <QuestionContent theme={theme}>{surveyData && surveyData[questionNumber]}</QuestionContent>
            )}
            <ReplyWrapper>
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                >
                    Oui
                </ReplyBox>
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                    theme={theme}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>
            <LinkWrapper theme={theme}>
                <Link to={`/survey/${prevQuestionNumber}`}>Pécédente</Link>
                {surveyData && surveyData[questionNumberInt +1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivante</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}
export default Survey;