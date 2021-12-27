import React from "react";
import PageWrapper from "./components/Layout/PageWrapper";
import Header from "./components/Header/HeaderArea";
import MainFlex from "./components/Layout/MainFlex";
import HeroArea from "./components/HeroArea/HeroArea";
import ShortenerArea from "./components/ShortenerArea/ShortenerArea";
import StatsArea from "./components/StatsArea/StatsArea";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <React.StrictMode>
            <PageWrapper>
                <Header />
                <HeroArea />
                <MainFlex>
                    <ShortenerArea />
                    <StatsArea />
                </MainFlex>
                <Footer />
            </PageWrapper>
        </React.StrictMode>
    );
};

export default App;