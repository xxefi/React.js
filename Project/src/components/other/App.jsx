import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Catalog from "./Catalog";
import News from "./News";
import AboutUs from "./AboutUs";
import NotFound from "../notfound/NotFound";
import Login from "../profile/Login";
import Register from "../profile/Register";
export default function App() {
  const location = useLocation();
  const showNavBar = !["/login", "/register"].includes(location.pathname);

  return (
    <div>
      {showNavBar && (
        <header>
          <Navbar />
        </header>
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/news" element={<News />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
