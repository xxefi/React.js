import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import News from "./components/News";
import AboutUs from "./components/AboutUs";
import 404 from "./components/NotFound.jsx"
export default function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/news" element={<News />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<404/>} />
        </Routes>
      </main>
    </div>
  );
}
