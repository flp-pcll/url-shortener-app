import React from "react";
import PageWrapper from "./components/Layout/PageWrapper";
import Header from "./components/Header/HeaderArea";
import MainFlex from "./components/Layout/MainFlex";
import HeroArea from "./components/HeroArea/HeroArea";
import ShortenerArea from "./components/ShortenerArea/ShortenerArea";
import StatsArea from "./components/StatsArea/StatsArea";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <PageWrapper>
            <Header />
            <HeroArea />
            <MainFlex>
                <ShortenerArea />
                <StatsArea />
            </MainFlex>
            <Footer />
        </PageWrapper>
    );
};

export default App;