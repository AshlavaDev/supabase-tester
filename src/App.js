import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Homemade from "./pages/Homemade";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Databases</h1>
        <Link to="/">Countries</Link>
        <Link to="/homemade">Homemade Data</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homemade" element={<Homemade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
