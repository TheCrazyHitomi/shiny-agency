import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useTheme } from "../../utils/hooks";

const CardLabel = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => (theme === 'light' ? colors.primary : colors.backgroundLight)};
    font-size: 20px;
    font-weight: bold;
`;

const CardTitle = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: 300;
  align-self: center;
`

const CardImage = styled.img`
    height: 150px;
    width: 150px;
    padding: 10px;
    border-radius: 50%;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${({ theme }) => 
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 30px;
    width: 250px;
    height: 250px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px ${({ theme }) => 
        theme === 'light' ? colors.shadowLight : colors.shadowDark};
    }
`;

const Card = ({ label = "", title = "", picture = "https://picsum.photos/id/6/150" }) => { // Default props new declaration

    const { theme } = useTheme()

    return (
        <CardWrapper theme={theme}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle theme={theme}>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}


// // Default props depreciated function
// Card.defaultProps = {
//     label: " ",
//     title: "",
//     picture: "https://picsum.photos/id/6/150"
// }


export default Card; 