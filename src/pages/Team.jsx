import React from "react";

const teams = [
  {
    id: 1,
    name: "Kolkata Titans",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Delhi_Capitals_Logo.svg",
    players: 11,
  },
  {
    id: 2,
    name: "Howrah Warriors",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/25/Chennai_Super_Kings_Logo.svg",
    players: 12,
  },
  {
    id: 3,
    name: "Tech United",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Mumbai_Indians_Logo.svg",
    players: 10,
  },
  {
    id: 4,
    name: "AI Avengers",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Kolkata_Knight_Riders_Logo.svg",
    players: 13,
  },
  {
    id: 5,
    name: "Code Crusaders",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Rajasthan_Royals_Logo.svg",
    players: 9,
  },
];

const Teams = () => {
  return (
    <section className="min-h-screen bg-[#111] text-white py-16 px-5 md:px-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-amber-400">
          Teams
        </h1>
        <p className="text-gray-300 mt-2">
          Meet the squads of MAKAUT Super League
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-[#1c1c1c] rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-md hover:shadow-amber-400/20"
          >
            <img
              src={team.logo}
              alt={team.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-xl font-bold text-amber-400">{team.name}</h2>
            <p className="mt-2 text-gray-400 text-sm">
              Players:{" "}
              <span className="font-semibold text-white">{team.players}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;

// import React from "react";
// const teams = [
//   {
//     id: 1,
//     name: "Kolkata Titans",
//     logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Delhi_Capitals_Logo.svg",
//     players: 11,
//   },
//   {
//     id: 2,
//     name: "Howrah Warriors",
//     logo: "https://upload.wikimedia.org/wikipedia/en/2/25/Chennai_Super_Kings_Logo.svg",
//     players: 12,
//   },
//   {
//     id: 3,
//     name: "Tech United",
//     logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Mumbai_Indians_Logo.svg",
//     players: 10,
//   },
//   {
//     id: 4,
//     name: "AI Avengers",
//     logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Kolkata_Knight_Riders_Logo.svg",
//     players: 13,
//   },
//   {
//     id: 5,
//     name: "Code Crusaders",
//     logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Rajasthan_Royals_Logo.svg",
//     players: 9,
//   },
// ];

// const Teams = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] text-gray-900 py-16 px-5 md:px-20">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-5xl font-extrabold text-sky-600">
//           Teams
//         </h1>
//         <p className="text-gray-600 mt-2 text-lg">
//           Meet the squads of MAKAUT Super League
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {teams.map((team) => (
//           <div
//             key={team.id}
//             className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-sky-100 hover:border-sky-400"
//           >
//             <img
//               src={team.logo}
//               alt={team.name}
//               className="w-24 h-24 object-contain mb-4"
//             />
//             <h2 className="text-xl font-bold text-sky-600">{team.name}</h2>
//             <p className="mt-2 text-gray-500 text-sm">
//               Players:{" "}
//               <span className="font-semibold text-gray-900">
//                 {team.players}
//               </span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Teams;

// import React from "react";
// import { teams } from "../assets/data/teams";

// const Teams = () => (
//   <section>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {teams.map((t) => (
//         <div key={t.id} className="bg-white rounded p-4 text-center shadow">
//           <img
//             src={t.logo}
//             alt={t.name}
//             className="w-24 h-24 mx-auto object-contain"
//           />
//           <h3 className="mt-3 font-bold">{t.name}</h3>
//           <div className="text-sm text-gray-600">Players: {t.players}</div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Teams;
