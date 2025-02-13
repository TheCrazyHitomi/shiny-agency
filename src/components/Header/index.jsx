import { Link } from "react-router-dom"
import styled from "styled-components"
import { StyledLink } from "../../utils/style/StyledLink.jsx"
import  colors  from "../../utils/style/colors.js"
import DarkLogo from "../../assets/dark-logo.png"

const StyledHeader = styled.header`
    margin: 40px 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    border-bottom: 2px solid ${colors.primary};
`



const Header = () => {
    return (
        <StyledHeader>
            <Link to={"/"}>
                <img src={DarkLogo} alt="Shiny-logo" />
            </Link>
            
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;