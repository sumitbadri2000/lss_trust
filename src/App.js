import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HeaderNav from "./Components/Header";
import HomeFirst from "./Components/homefir";
function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomeFirst />} />
      </Routes>
    </>
  );
}

export default App;
