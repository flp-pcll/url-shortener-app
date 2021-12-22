import React from "react";
import Header from "./components/Header/HeaderArea";
import MainFlex from "./components/Layout/MainFlex";
import HeroArea from "./components/HeroArea/HeroArea";
import ShortenerArea from "./components/ShortenerArea/ShortenerArea";
import StatsArea from "./components/StatsArea/StatsArea";

import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <HeroArea />
            <MainFlex>
                <ShortenerArea />
                <StatsArea />
            </MainFlex>
        </div>
    );
};

export default App;