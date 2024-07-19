import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import News from "./components/News";
import AboutUs from "./components/AboutUs";
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
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </main>
    </div>
  );
}
