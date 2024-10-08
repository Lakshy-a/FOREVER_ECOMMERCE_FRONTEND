import "./App.css";
import Navbar from "./Components/userPanelComponents/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/userPanelComponents/HomePage";
import AboutPage from "./Components/userPanelComponents/AboutPage";
import ContactPage from "./Components/userPanelComponents/ContactPage";
import Footer from "./Components/userPanelComponents/Footer";
import PrivacyPolicy from "./Components/userPanelComponents/PrivacyPolicy";
import DeliveryPolicy from "./Components/userPanelComponents/DeliveryPolicy";
import ScrollToTop from "./Components/userPanelComponents/ScrollToTop";
import CollectionPage from "./Components/userPanelComponents/CollectionPage";
import Login from "./Components/userPanelComponents/Login";
import SignUp from "./Components/userPanelComponents/SignUp";
import ForgotPassword from "./Components/userPanelComponents/ForgotPassword";
import ProductPage from "./Components/userPanelComponents/ProductPage";
import Cart from "./Components/userPanelComponents/Cart";
import Checkout from "./Components/userPanelComponents/Checkout";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path={`/product/:id`} element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
