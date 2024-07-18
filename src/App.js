import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HeaderNav from "./Components/Header";
import HomeFirst from "./Components/homefir";
import Events from "./Components/Event";
import Certificate from "./Components/Certificate";
import Water from "./Components/DrinkingWater";
import YourSupport from "./Components/YourSupport";
function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<YourSupport />} />
      </Routes>
    </>
  );
}

export default App;
