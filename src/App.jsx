import { useState } from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import Matches from "./pages/Matches";
import Standings from "./pages/Standings";
import Footer from "./components/Footer";
import TeamDetail from "./pages/TeamDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <>
    //   <Navbar />
    //   <div className="h-[80%] ">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/teams" element={<Team />} />
    //       <Route path="/matches" element={<Matches />} />
    //       <Route path="/standings" element={<Standings />} />
    //     </Routes>
    //   </div>
    // </>

    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar: 10% of screen height */}
      <header className="h-[7%] shrink-0">
        <Navbar />
      </header>

      {/* Main content: 85% of screen height */}
      <main className="min-h-screen overflow-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/teams/:slug" element={<TeamDetail />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/standings" element={<Standings />} />
        </Routes>
      </main>

      {/* Footer: 5% of screen height */}
      <footer className="z-10 h-[5%] fixed bottom-0 left-0 w-full   ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

// App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Team from "./pages/Team";
// import Matches from "./pages/Matches";
// import Standings from "./pages/Standings";

// const App = () => {
//   return (
//     // full viewport, column layout
//     <div className="h-screen flex flex-col">
//       {/* Navbar: 10vh */}
//       <header className="h-[10vh] shrink-0">
//         <Navbar />
//       </header>

//       {/* Main: takes remaining space. scroll inside main only */}
//       <main className="flex-1 overflow-auto">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/teams" element={<Team />} />
//           <Route path="/matches" element={<Matches />} />
//           <Route path="/standings" element={<Standings />} />
//         </Routes>
//       </main>

//       {/* Footer: 5vh */}
//       <footer className="h-[5vh] shrink-0">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default App;
