// import React from "react";
import ReactDOM from "react-dom/client";

// react-router
import { BrowserRouter,Routes, Route } from "react-router";

// pages
import Home  from "./pages/Home/Index.jsx";
import Surevey from "./pages/Surevey/Surevey.jsx";

// components
import Header from "./components/Header/index.jsx";
import Error from "./components/Error/index.jsx";
import Freelances from "./pages/Freelance/Freelances.jsx";
import Results from "./pages/Results/Results.jsx";

// styles
import "./styles/index.css";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
        <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/surevey" element={<Surevey />} />
                    <Route path="/freelances" element={<Freelances />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="*" element={<Error />} />
                </Routes>
        </BrowserRouter>
);