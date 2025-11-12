import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import Matches from "./pages/Matches";
import Standings from "./pages/Standings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </>
  );
}

export default App;
