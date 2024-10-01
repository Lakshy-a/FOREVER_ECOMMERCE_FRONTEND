import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import DeliveryPolicy from "./Components/DeliveryPolicy";
import ScrollToTop from "./Components/ScrollToTop";
import CollectionPage from "./Components/CollectionPage"

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/deliveryPolicy" element={<DeliveryPolicy />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
