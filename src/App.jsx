import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div >
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
