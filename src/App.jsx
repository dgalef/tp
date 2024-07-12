import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MatchDetails } from "./pages/MatchDetails";

import logo from "./assets/9.png"
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/tp">
          <img src={logo} alt="Copa América 2024" className="logo-copa" />
          {/* <h1 className="title">Copa América 2024</h1> */}
        </Link>
      </header>
      <Routes>
        <Route path="/tp" element={<LandingPage />} />
        <Route path="/tp/match/:matchId" element={<MatchDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
