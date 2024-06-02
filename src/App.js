import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-website" element={<Home />} />
        <Route path="/my-website/contact" element={<Contact />} />
        <Route path="/my-website/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

