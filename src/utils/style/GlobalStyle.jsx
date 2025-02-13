import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../context/index.jsx"

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'trebuchet ms', helvetica, sans-serif;
    }
    body {
        margin: 0;
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
        color: ${({ isDarkMode }) => (isDarkMode ? 'white' : '#2F2E41')};
    }
`


const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}

export default GlobalStyle