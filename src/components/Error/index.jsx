import styled from "styled-components";
import colors from "../../utils/style/colors";
import errorPic from "../../assets/error404.svg";

const StyledHero = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
background-color: ${colors.backgroundLight};
width: 90%;
height: 78vh;
`

const StyledHeroPic = styled.img`
width: 50%;
`

const Error =() => {
    return (
        <StyledHero>
            <h1>Oups ! </h1>
            <StyledHeroPic src={errorPic} alt="error404" />
            <p>🙈 Cette page n&apos;existe pas 🙈</p>
        </StyledHero>
    )
}

export default Error;
