import styled from "styled-components";
import colors from "../../utils/style/colors";
import errorPic from "../../assets/error404.svg";
import { useTheme } from "../../utils/hooks";


const HomeWrapper = styled.div`
display: flex;
justify-content: center;
`

const StyledHero = styled.div`
    width: 90%;
    margin:  0 80px;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => 
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    `

const StyledHeroPic = styled.img`
width: 70%;
margin: 60px;
`

const Error =() => {

    const { theme } = useTheme();

    return (
        <HomeWrapper >
        <StyledHero theme={theme}>
            <h1>Oups ! </h1>
            <StyledHeroPic src={errorPic} alt="error404" />
            <p>🙈 Cette page n&apos;existe pas 🙈</p>
        </StyledHero>
        </HomeWrapper>
    )
}

export default Error;
