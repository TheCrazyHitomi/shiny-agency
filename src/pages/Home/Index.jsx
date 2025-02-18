
import styled from "styled-components"
import  colors  from "../../utils/style/colors.js"
import HomeIllustration from "../../assets/home-illustration.svg"
import { StyledHeroLink } from "../../utils/style/StyledHeroLink"
import { useTheme } from "../../utils/hooks/index.jsx"



  const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
  const StyledHero = styled.div`
  width: 90%;
  margin:  0 80px;
  padding: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${({ theme }) => 
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  `

const StylesHeroDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 35%;
`

  const StyledHeroTitle = styled.h1`
    line-height: 2;
    font-size: 40px;
  `
  const Illustration = styled.img`
  width: 40%;

`


const Home = () => {

  const { theme } = useTheme();

  return (
    <HomeWrapper >
      <StyledHero theme={theme}>
        <StylesHeroDiv>
          <StyledHeroTitle>Repérez vos besoins,
          on s’occupe du reste, avec les meilleurs talents</StyledHeroTitle>
          <StyledHeroLink to="/survey/1" $isFullLink>Faire le test</StyledHeroLink>
        </StylesHeroDiv>
        <Illustration src={HomeIllustration} alt="home-illustration" />
      </StyledHero>
    </HomeWrapper>
  )
}

export default Home;