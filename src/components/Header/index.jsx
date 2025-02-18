import { Link } from "react-router-dom"
import styled from "styled-components"
import { StyledLink } from "../../utils/style/StyledLink.jsx"
import  colors  from "../../utils/style/colors.js"
import DarkLogo from "../../assets/dark-logo.png"
import LightLogo from "../../assets/light-logo.png"
import { useTheme } from "../../utils/hooks/index.jsx"

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

    const { theme } = useTheme();

    return (
        <StyledHeader>
            <Link to={"/"}>
                <img src={theme === 'light' ? DarkLogo : LightLogo} alt="Shiny-logo" />
            </Link>
            
            <StyledNav>
                <StyledLink theme={theme} to="/">Accueil</StyledLink>
                <StyledLink theme={theme} to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;