import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/footer/Footer";
import ShopPage from "./components/pages/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
