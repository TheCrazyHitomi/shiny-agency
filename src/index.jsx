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
import Footer from "./components/Footer/index.jsx";

// styles
// import "./styles/index.css";
import GlobalStyle from "./utils/style/GlobalStyle.jsx";
// context
import { SurveyProvider, ThemeProvider } from "./utils/context/index.jsx";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
        <BrowserRouter>
                <ThemeProvider>
                <SurveyProvider>
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
                </SurveyProvider>
                        <Footer />
                </ThemeProvider>
        </BrowserRouter>
);