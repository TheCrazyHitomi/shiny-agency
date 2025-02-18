import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from './colors';

export const StyledHeroLink = styled(Link)`
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