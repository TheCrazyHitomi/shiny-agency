import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useFetch, useTheme } from "../../utils/hooks";
import { Loader } from "../../utils/style/Atoms";
import { StyledHeroLink } from "../../utils/style/StyledHeroLink";

const Resultscontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin 60px 90px;
    padding: 60px;
    background-color: ${({ theme }) => 
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
    color: ${({ theme }) => 
        theme === 'light' ? colors.secondary : 'white'};
    font-weight: normal;
    font-size: 26px;
    max-width: 60%;
    text-align: center;
    & span {
        padding-left: 10px;
    }
`

const DescriptionWrapper = styled.div`
    padding: 60px;
`

const JobTitle = styled.span`
    color: ${({ theme }) => 
        theme === 'light' ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
`

const JobDescription = styled.div`
    font-size: 18px;
    & > p {
        color: ${({ theme }) =>
            theme === 'light' ? colors.secondary : colors.backgroundLight};
        margin-block-start: 5px;
    }
    & > span {
        font-size: 20px;
    }
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    }
    return `${title},`
}


export function formatQueryParams (answers)  {
    const answerNumbers = Object.keys(answers);

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstAnswer = index === 0;
        const separator = isFirstAnswer ? '' : '&';
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
}, '');
}

const Results = () => {
    const { theme } = useTheme();
    const {answers} = useContext(SurveyContext)
    const queryParams = formatQueryParams(answers);
    console.log(answers)

    const { data, isLoading, error } = useFetch(`http://localhost:8000/results?${queryParams}`);

    console.log('===== data =====', data)
    if (error) {
        return <span>Oups ! il y a un problème</span>
    }    

    const resultsData = data?.resultsData;

    return isLoading ? (
        <LoaderWrapper>
            <Loader theme={theme}/>
        </LoaderWrapper>   
    ) : (
        <Resultscontainer theme={theme}>
            <ResultsTitle theme={theme}>
            Les compétences dont vous avez besoin :
            {resultsData &&
                resultsData.map((result, index) => (
                    <JobTitle
                        theme={theme}
                        key={`result-title-${index}-${result.title}`}
                    >
                        {formatJobList(result.title, resultsData.length, index)}
                    </JobTitle>
                ))}
            
            </ResultsTitle>
            <StyledHeroLink  $isFullLink to="/freelances">
                Découvrez nos profils
            </StyledHeroLink>
            <DescriptionWrapper>
                {resultsData &&
                    resultsData.map((result, index) => (
                        <JobDescription 
                        key={`result-description-${index}-${result.title}`}
                        theme={theme}>
                            <JobTitle theme={theme}>{result.title}</JobTitle>
                            <p>{result.description}</p>
                        </JobDescription>
                    ))}
            </DescriptionWrapper>
        </Resultscontainer>
    )
}

export default Results;
