import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 16px;
    font-weight: bold;
`;

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
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 250px;
    height: 250px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px  #e2e3e9;
    }
`;

const Card = ({ label = "", title = "", picture = "https://picsum.photos/id/6/150" }) => { // Default props new declaration
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span>{title}</span>
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