import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignaturePage from "@pages/signature-page/SignaturePage.jsx";
import Navbar from "@components/navbar/Navbar.jsx";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar/>
        <Routes>
          <Route path="/" element={SignaturePage()}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};