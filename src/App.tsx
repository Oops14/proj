import "./App.css";
import { Home } from "./components/home/Home";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Friends } from "./components/friends/Friends";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/friends" element={<Friends />} />
            </Routes>
        </div>
    );
}

export default App;
