import React from "react";
import Header from "./components/Header/HeaderArea";
import MainFlex from "./components/Layout/MainFlex";
import HeroArea from "./components/HeroArea/HeroArea";
import ShortenerArea from "./components/ShortenerArea/ShortenerArea";

import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <MainFlex>
                <HeroArea />
                <ShortenerArea />
                {/* {Stats} */}
            </MainFlex>
        </div>
    );
};

export default App;