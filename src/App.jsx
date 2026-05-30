import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamDetails from "./pages/TeamDetails";
import PlayerDetails from "./pages/PlayerDetails";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import ComparePlayers from "./pages/ComparePlayers";
function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:id" element={<TeamDetails />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
        <Route path="/compare" element={<ComparePlayers />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

    </Router>
  );
}
export default App;