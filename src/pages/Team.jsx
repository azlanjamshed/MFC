// import React from "react";
// import teams from "../assets/data/teams";

// const Teams = () => {
//   return (
//     <section className="min-h-full bg-[#111] text-white pb-25 md:pb-10 px-5 md:px-20">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-5xl font-extrabold text-amber-400">
//           Teams
//         </h1>
//         <p className="text-gray-300 mt-2">
//           Meet the squads of MAKAUT Super League
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
//         {teams.map((team) => (
//           <div
//             key={team.id}
//             className="bg-[#1c1c1c] rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-md hover:shadow-amber-400/20"
//           >
//             <img
//               src={team.logo}
//               alt={team.name}
//               className="w-24 h-24 object-contain mb-4"
//             />
//             <h2 className="text-xl font-bold text-amber-400">{team.name}</h2>
//             <p className="mt-2 text-gray-400 text-sm">
//               Players:{" "}
//               <span className="font-semibold text-white">{team.players}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Teams;

// src/pages/Teams.jsx
import React from "react";
import { Link } from "react-router-dom";
import teams from "../assets/data/teams/index"; // index.js that imports each team file

const Teams = () => {
  return (
    <section className="min-h-full bg-[#111] text-white pb-10 px-5 md:px-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-amber-400">
          Teams
        </h1>
        <p className="text-gray-300 mt-2">
          Meet the squads of MAKAUT Super League
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teams.map((team) => (
          <Link
            key={team.id}
            to={`/teams/${team.slug}`}
            className="group block bg-[#1c1c1c] rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-md hover:shadow-amber-400/20"
          >
            <img
              src={team.logo}
              alt={team.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-xl font-bold text-amber-400">{team.name}</h2>
            <p className="mt-2 text-gray-400 text-sm">
              Players:{" "}
              <span className="font-semibold text-white">
                {team.players?.length ?? team.players}
              </span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Teams;
