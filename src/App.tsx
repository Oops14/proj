import React from "react";
import "./App.css";
import {Home} from "./components/home/Home";
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
