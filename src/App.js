import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HeaderNav from "./Components/Header";
import Footer from "./Components/Footer";
import Galary from "./Pages/Galary";
import Events from "./Pages/Events";
import About from "./Components/About";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />{" "}
    </>
  );
}

export default App;
