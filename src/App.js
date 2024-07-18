import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HeaderNav from "./Components/Header";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      {/* <HeaderNav /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
