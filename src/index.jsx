// import React from "react";
import ReactDOM from "react-dom/client";

// react-router
import { BrowserRouter,Routes, Route } from "react-router";

// pages
import Home  from "./pages/Home/Index.jsx";
import Survey from "./pages/Survey/Survey.jsx";
import Results from "./pages/Results/Results.jsx";
import Freelances from "./pages/Freelance/Freelances.jsx";

// components
import Header from "./components/Header/index.jsx";
import Error from "./components/Error/index.jsx";

// styles
// import "./styles/index.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
margin: 0;
padding: 0;
}

div {
font-family: 'trebuchet ms', helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
`;

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
        <BrowserRouter>
        <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/survey/" element={<Survey />} />
                    <Route path="/survey/:questionNumber" element={<Survey />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/freelances" element={<Freelances />} />
                    <Route path="*" element={<Error />} />
                </Routes>
        </BrowserRouter>
);