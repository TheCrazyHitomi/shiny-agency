import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../context/index.jsx"
import colors from "./colors.js"

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Comfortaa', sans-serif;
    }
    body {
        margin: 0;
        background-color: ${({ isDarkMode }) => (isDarkMode ? colors.dark : 'white')};
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.dark)};
    }
`


const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}

export default GlobalStyle