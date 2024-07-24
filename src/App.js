import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HeaderNav from "./Components/Header";
import Footer from "./Components/Footer";
import Galary from "./Pages/Galary";
import Events from "./Pages/Events";
import About from "./Components/About";
import Contact from "./Pages/Contact";
import Certification from "./Pages/Certificate";
import Media from "./Pages/Media";
import AnnualReport from "./Pages/Annual";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certification  />} />
        <Route path="/gallery" element={<Galary />} />
        <Route path="/event" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/annual" element={<AnnualReport />} />
      </Routes>
      <Footer />{" "}
    </>
  );
}

export default App;
