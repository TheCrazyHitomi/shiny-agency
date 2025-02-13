import { useContext } from "react";
import { ThemeContext } from "../../utils/context/index.jsx";

import styled from "styled-components";
import colors from "../../utils/style/colors";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
`
const NigthModeButton = styled.button`
    background-color: transparent;
    color: ${colors.secondary};
    border: none;
    cursor: pointer;
`

const Footer = () => {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
        <FooterContainer>
            <NigthModeButton 
                onClick={ () => toggleTheme()}>Changer de mode  { theme === 'light' ? '🌞' : '🌙' }
                </NigthModeButton>
        </FooterContainer>
    )
}

export default Footer;