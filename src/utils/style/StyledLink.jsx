import { Link } from "react-router-dom"
import styled from "styled-components"
import  colors  from "../../utils/style/colors.js"


export const StyledLink = styled(Link)`
    padding: 10px 35px 10px 15px;
    color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
    text-decoration: none;
    font-size: 18px;
    ${({ $isFullLink }) => $isFullLink && `
    padding: 10px 15px 10px 15px;
        color : white;
        border-radius: 20px 20px 0 0;
        background-color: ${colors.primary};
    `}
    `



