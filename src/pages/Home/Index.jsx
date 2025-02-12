import { Link } from "react-router-dom"
import styled from "styled-components"
import  colors  from "../../utils/style/colors.js"
import HomeIllustration from "../../assets/home-illustration.svg"


  const StyledHero = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${colors.backgroundLight};
  width: 90%;
  height: 78vh;
  `

const StylesHeroDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 35%;
  height: 100%;
`

  const StyledHeroTitle = styled.h1`
    line-height: 2;
    font-size: 40px;
  `



  const StyledHeroLink = styled(Link)`
  padding: 10px 35px 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${({ $isFullLink }) => $isFullLink && `
  margin-top: 20px;
  padding: 10px 50px 10px 50px;
      color : white;
      border-radius: 20px;
      background-color: ${colors.primary};
  `}
  `
const Home = () => {


  return (
    <StyledHero>
      <StylesHeroDiv>
        <StyledHeroTitle>Repérez vos besoins,
        on s’occupe du reste, avec les meilleurs talents</StyledHeroTitle>
        <StyledHeroLink to="/survey/1" $isFullLink>Faire le test</StyledHeroLink>
      </StylesHeroDiv>
      <img src={HomeIllustration} alt="home-illustration" />
    </StyledHero>
  )
}

export default Home;