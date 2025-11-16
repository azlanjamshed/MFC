// import React, { useMemo } from "react";
// import teamsData from "../assets/data/teams/index";
// import { computeFromTeams } from "../utils/standingsFromTeams";

// const Standings = () => {
//   // compute & sort automatically (winPoints:2, drawPoints:1)
//   const table = useMemo(
//     () => computeFromTeams(teamsData, { winPoints: 2, drawPoints: 1 }),
//     [teamsData]
//   );

//   return (
//     <section className="min-h-full bg-gradient-to-b from-white to-sky-300 px-4 pt-10 pb-20">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <header className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
//           <div>
//             <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-700 leading-tight">
//               League Standings
//             </h1>
//             <p className="mt-1 text-sm text-gray-600">
//               Automatically computed from team W / L / D — points = (W × 2) + (D
//               × 1)
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="text-xs text-gray-500">Legend</div>
//             <div className="flex items-center gap-2 text-xs">
//               <span className="w-3 h-3 bg-green-100 rounded-sm border border-green-200" />
//               <span className="text-gray-600">Wins</span>
//             </div>
//             <div className="flex items-center gap-2 text-xs">
//               <span className="w-3 h-3 bg-amber-100 rounded-sm border border-amber-200" />
//               <span className="text-gray-600">Draws</span>
//             </div>
//             <div className="flex items-center gap-2 text-xs">
//               <span className="w-3 h-3 bg-rose-100 rounded-sm border border-rose-200" />
//               <span className="text-gray-600">Losses</span>
//             </div>
//           </div>
//         </header>

//         {/* Desktop table */}
//         <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden border">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm table-fixed">
//               <thead className="bg-sky-50 text-sky-700">
//                 <tr className="text-left">
//                   <th className="p-3 w-14">Pos</th>
//                   <th className="p-3">Team</th>
//                   <th className="p-3 text-center w-14">Pl</th>
//                   <th className="p-3 text-center w-14">W</th>
//                   <th className="p-3 text-center w-14">L</th>
//                   <th className="p-3 text-center w-14">D</th>
//                   <th className="p-3 text-right w-20">Pts</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {table.map((r, idx) => (
//                   <tr
//                     key={r.slug || r.name}
//                     className={`border-t transition-colors hover:bg-sky-50 ${
//                       idx % 2 === 0 ? "bg-white" : "bg-white/95"
//                     }`}
//                   >
//                     <td className="p-3 font-medium">{r.pos}</td>

//                     <td className="p-3 flex items-center gap-3">
//                       {r.logo ? (
//                         <img
//                           src={r.logo}
//                           alt={r.name}
//                           className="w-8 h-8 object-contain rounded"
//                         />
//                       ) : (
//                         <div className="w-8 h-8 bg-sky-100 text-xs flex items-center justify-center rounded font-bold text-sky-700">
//                           {r.name
//                             .split(" ")
//                             .map((w) => w[0])
//                             .slice(0, 2)
//                             .join("")}
//                         </div>
//                       )}

//                       <div className="min-w-0">
//                         <div className="font-semibold text-sky-700 truncate">
//                           {r.name}
//                         </div>
//                         <div className="text-xs text-gray-500">
//                           Players:{" "}
//                           <span>
//                             {Array.isArray(r.players)
//                               ? r.players.length
//                               : r.players ?? "—"}
//                           </span>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="p-3 text-center">{r.played}</td>
//                     <td className="p-3 text-center">
//                       <span className="px-2 py-0.5 rounded text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
//                         {r.won}
//                       </span>
//                     </td>
//                     <td className="p-3 text-center">
//                       <span className="px-2 py-0.5 rounded text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100">
//                         {r.lost}
//                       </span>
//                     </td>
//                     <td className="p-3 text-center">
//                       <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">
//                         {r.draw}
//                       </span>
//                     </td>
//                     <td className="p-3 text-right font-bold text-sky-700">
//                       {r.pts}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Mobile list (compact cards) */}
//         <div className="md:hidden space-y-3">
//           {table.map((r) => (
//             <div
//               key={r.slug || r.name}
//               className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-between"
//             >
//               <div className="flex items-center gap-3 min-w-0">
//                 {r.logo ? (
//                   <img
//                     src={r.logo}
//                     alt={r.name}
//                     className="w-12 h-12 object-contain rounded"
//                   />
//                 ) : (
//                   <div className="w-12 h-12 bg-sky-100 text-sm flex items-center justify-center rounded font-bold text-sky-700">
//                     {r.name
//                       .split(" ")
//                       .map((w) => w[0])
//                       .slice(0, 2)
//                       .join("")}
//                   </div>
//                 )}

//                 <div className="min-w-0">
//                   <div className="font-semibold text-sky-700 truncate">
//                     {r.name}
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Players:{" "}
//                     {Array.isArray(r.players)
//                       ? r.players.length
//                       : r.players ?? "—"}
//                   </div>
//                 </div>
//               </div>

//               <div className="text-right">
//                 <div className="text-sm font-bold text-sky-700">
//                   {r.pts} pts
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   P {r.played} • W {r.won} • D {r.draw}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Standings;

// src/pages/Standings.jsx
// import React, { useMemo } from "react";
// import teamsData from "../assets/data/teams/index";
// import { computeFromTeams } from "../utils/standingsFromTeams";

// const Standings = () => {
//   // compute & sort automatically (winPoints:2, drawPoints:1)
//   const table = useMemo(
//     () => computeFromTeams(teamsData, { winPoints: 2, drawPoints: 1 }),
//     [teamsData]
//   );

//   return (
//     <section className="min-h-full bg-[#111] text-white px-4 pt-10 pb-20">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <header className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
//           <div>
//             <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400 leading-tight">
//               League Standings
//             </h1>
//             <p className="mt-1 text-sm text-gray-300">
//               Automatically computed from team W / L / D — points = (W × 2) + (D
//               × 1)
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="text-xs text-gray-400">Legend</div>
//             <div className="flex items-center gap-2 text-xs">
//               <span className="w-3 h-3 bg-green-500 rounded-sm border border-green-700" />
//               <span className="text-gray-400">Wins</span>
//             </div>
//             <div className="flex items-center gap-2 text-xs">
//               <span className="w-3 h-3 bg-amber-300 rounded-sm border border-amber-400" />
//               <span className="text-gray-400">Draws</span>
//             </div>
//             <div className="flex items-center gap-2 text-xs">
//               <span className="w-3 h-3 bg-rose-500 rounded-sm border border-rose-700" />
//               <span className="text-gray-400">Losses</span>
//             </div>
//           </div>
//         </header>

//         {/* Desktop table */}
//         <div className="hidden md:block bg-[#0f0f0f] rounded-2xl shadow-md overflow-hidden border border-[#222]">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm table-fixed">
//               <thead className="bg-[#111] text-gray-300">
//                 <tr className="text-left">
//                   <th className="p-3 w-14">Pos</th>
//                   <th className="p-3">Team</th>
//                   <th className="p-3 text-center w-14">Pl</th>
//                   <th className="p-3 text-center w-14">W</th>
//                   <th className="p-3 text-center w-14">L</th>
//                   <th className="p-3 text-center w-14">D</th>
//                   <th className="p-3 text-right w-20">Pts</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {table.map((r, idx) => (
//                   <tr
//                     key={r.slug || r.name}
//                     className={`border-t transition-colors hover:bg-white/5 ${
//                       idx % 2 === 0 ? "bg-[#0f0f0f]" : "bg-[#0d0d0d]"
//                     }`}
//                   >
//                     <td className="p-3 font-medium text-gray-200">{r.pos}</td>

//                     <td className="p-3 flex items-center gap-3">
//                       {r.logo ? (
//                         <img
//                           src={r.logo}
//                           alt={r.name}
//                           className="w-8 h-8 object-contain rounded"
//                         />
//                       ) : (
//                         <div className="w-8 h-8 bg-sky-800 text-xs flex items-center justify-center rounded font-bold text-sky-200">
//                           {r.name
//                             .split(" ")
//                             .map((w) => w[0])
//                             .slice(0, 2)
//                             .join("")}
//                         </div>
//                       )}

//                       <div className="min-w-0">
//                         <div className="font-semibold text-gray-100 truncate">
//                           {r.name}
//                         </div>
//                         <div className="text-xs text-gray-400">
//                           Players:{" "}
//                           <span>
//                             {Array.isArray(r.players)
//                               ? r.players.length
//                               : r.players ?? "—"}
//                           </span>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="p-3 text-center text-gray-200">
//                       {r.played}
//                     </td>
//                     <td className="p-3 text-center">
//                       <span className="px-2 py-0.5 rounded text-xs font-semibold bg-green-500 text-white border border-green-700">
//                         {r.won}
//                       </span>
//                     </td>
//                     <td className="p-3 text-center">
//                       <span className="px-2 py-0.5 rounded text-xs font-semibold bg-rose-500 text-white border border-rose-700">
//                         {r.lost}
//                       </span>
//                     </td>
//                     <td className="p-3 text-center">
//                       <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-300 text-[#111] border border-amber-400">
//                         {r.draw}
//                       </span>
//                     </td>
//                     <td className="p-3 text-right font-bold text-amber-400">
//                       {r.pts}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Mobile list (compact cards) */}
//         <div className="md:hidden space-y-3">
//           {table.map((r) => (
//             <div
//               key={r.slug || r.name}
//               className="bg-[#1c1c1c] rounded-lg shadow-sm p-3 flex items-center justify-between"
//             >
//               <div className="flex items-center gap-3 min-w-0">
//                 {r.logo ? (
//                   <img
//                     src={r.logo}
//                     alt={r.name}
//                     className="w-12 h-12 object-contain rounded"
//                   />
//                 ) : (
//                   <div className="w-12 h-12 bg-sky-800 text-sm flex items-center justify-center rounded font-bold text-sky-200">
//                     {r.name
//                       .split(" ")
//                       .map((w) => w[0])
//                       .slice(0, 2)
//                       .join("")}
//                   </div>
//                 )}

//                 <div className="min-w-0">
//                   <div className="font-semibold text-gray-100 truncate">
//                     {r.name}
//                   </div>
//                   <div className="text-xs text-gray-400">
//                     Players:{" "}
//                     {Array.isArray(r.players)
//                       ? r.players.length
//                       : r.players ?? "—"}
//                   </div>
//                 </div>
//               </div>

//               <div className="text-right">
//                 <div className="text-sm font-bold text-amber-400">
//                   {r.pts} pts
//                 </div>
//                 <div className="text-xs text-gray-400">
//                   P {r.played} • W {r.won} • D {r.draw}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Standings;

// src/pages/Standings.jsx
import React, { useMemo } from "react";
import teamsData from "../assets/data/teams/index";
import { computeFromTeams } from "../utils/standingsFromTeams";

const Standings = () => {
  // Automatically compute points: (win × 2) + (draw × 1)
  const table = useMemo(
    () => computeFromTeams(teamsData, { winPoints: 2, drawPoints: 1 }),
    [teamsData]
  );

  return (
    <section className="min-h-screen bg-[#111] text-white px-4 pt-10 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400 leading-tight">
              League Standings
            </h1>
            <p className="mt-1 text-sm text-gray-300">
              Points = (Wins × 2) + (Draws × 1)
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center flex-wrap gap-3 text-xs">
            <div className="text-gray-400 font-medium">Legend:</div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-500 rounded-sm" />
              <span className="text-gray-400">Wins</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-amber-400 rounded-sm" />
              <span className="text-gray-400">Draws</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-rose-600 rounded-sm" />
              <span className="text-gray-400">Losses</span>
            </div>
          </div>
        </header>

        {/* Universal table for all devices */}
        <div className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-x-auto border border-[#222]">
          <table className="w-full text-sm md:text-base min-w-[650px]">
            <thead className="bg-[#0d0d0d] text-amber-400 uppercase">
              <tr>
                <th className="p-3 text-left w-12">Pos</th>
                <th className="p-3 text-left">Team</th>
                <th className="p-3 text-center w-14">Pl</th>
                <th className="p-3 text-center w-14">W</th>
                <th className="p-3 text-center w-14">L</th>
                <th className="p-3 text-center w-14">D</th>
                <th className="p-3 text-right w-16">Pts</th>
              </tr>
            </thead>

            <tbody>
              {table.map((team, idx) => (
                <tr
                  key={team.slug || team.name}
                  className={`border-t border-[#222] hover:bg-white/5 transition ${
                    idx % 2 === 0 ? "bg-[#141414]" : "bg-[#101010]"
                  }`}
                >
                  {/* Position */}
                  <td className="p-3 text-center text-gray-300 font-medium">
                    {team.pos}
                  </td>

                  {/* Team */}
                  <td className="p-3 flex items-center gap-3 text-gray-100">
                    {team.logo ? (
                      <img
                        src={team.logo}
                        alt={team.name}
                        className="w-8 h-8 object-contain rounded"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-sky-800 flex items-center justify-center rounded text-xs font-bold text-sky-200">
                        {team.name
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="font-semibold truncate">{team.name}</div>
                      <div className="text-xs text-gray-400">
                        {Array.isArray(team.players)
                          ? `${team.players.length} players`
                          : `${team.players ?? "—"} players`}
                      </div>
                    </div>
                  </td>

                  {/* Played */}
                  <td className="p-3 text-center text-gray-300">
                    {team.played}
                  </td>

                  {/* Wins */}
                  <td className="p-3 text-center">
                    <span className="px-2 py-0.5 rounded-md bg-green-500 text-white text-xs font-semibold border border-green-600">
                      {team.won}
                    </span>
                  </td>

                  {/* Losses */}
                  <td className="p-3 text-center">
                    <span className="px-2 py-0.5 rounded-md bg-rose-500 text-white text-xs font-semibold border border-rose-600">
                      {team.lost}
                    </span>
                  </td>

                  {/* Draws */}
                  <td className="p-3 text-center">
                    <span className="px-2 py-0.5 rounded-md bg-amber-400 text-[#111] text-xs font-semibold border border-amber-500">
                      {team.draw}
                    </span>
                  </td>

                  {/* Points */}
                  <td className="p-3 text-right font-bold text-amber-400">
                    {team.pts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {table.length === 0 && (
          <p className="mt-6 text-center text-gray-400">
            No standings data available yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Standings;
