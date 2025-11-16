// import teamsLogos from "../assets/data/logo";
// import matches from "../assets/data/matches";

// // 🧠 Get team logo dynamically
// const getLogo = (name) => {
//   const key = name.toLowerCase().split(" ")[0];
//   return teamsLogos[key] || teamsLogos.kolkata;
// };

// // 🎯 Determine match status by comparing with current date/time
// const getMatchStatus = (match) => {
//   const now = new Date();
//   const matchStart = new Date(`${match.date}T${match.time}`);
//   const matchEnd = new Date(matchStart.getTime() + 2 * 60 * 60 * 1000); // assume 2-hour match

//   if (now > matchEnd) return "completed";
//   if (now >= matchStart && now <= matchEnd) return "ongoing";
//   return "upcoming";
// };

// const statusStyles = {
//   completed: "bg-red-100 text-red-700 border border-red-200",
//   upcoming: "bg-green-100 text-green-700 border border-green-200",
//   ongoing: "bg-green-100 text-green-700 border border-green-300 animate-pulse",
// };

// const Matches = () => {
//   // Sort matches by date/time
//   const sorted = [...matches].sort(
//     (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
//   );

//   // Group by date for display
//   const grouped = sorted.reduce((acc, m) => {
//     const d = m.date;
//     if (!acc[d]) acc[d] = [];
//     acc[d].push(m);
//     return acc;
//   }, {});

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900 pt-10 pb-30  px-5 md:px-12 md:pb-40 ">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
//           <div>
//             <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600">
//               Matches
//             </h1>
//             <p className="text-gray-600 mt-1">
//               Automatically tracked by date & time
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <span className="w-3 h-3 rounded-full bg-green-600 block" />
//               <span className="text-sm text-gray-700">Upcoming / Ongoing</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-3 h-3 rounded-full bg-red-600 block" />
//               <span className="text-sm text-gray-700">Completed</span>
//             </div>
//           </div>
//         </header>

//         {/* Matches by Date */}
//         {Object.keys(grouped).map((date) => (
//           <div key={date} className="bg-white rounded-2xl p-5 shadow mb-6">
//             <h2 className="text-lg font-semibold text-gray-700 mb-4">
//               {new Date(date).toLocaleDateString(undefined, {
//                 weekday: "short",
//                 month: "short",
//                 day: "numeric",
//               })}
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {grouped[date].map((m) => {
//                 const status = getMatchStatus(m);
//                 return (
//                   <div
//                     key={m.id}
//                     className="flex items-center justify-between gap-4 p-4 rounded-lg border border-slate-100 hover:shadow-md transition"
//                   >
//                     {/* Team A */}
//                     <div className="flex items-center gap-3 min-w-0">
//                       <img
//                         src={getLogo(m.teamA)}
//                         alt={m.teamA}
//                         className="w-12 h-12 object-contain"
//                       />
//                       <div className="text-sm font-semibold truncate">
//                         {m.teamA}
//                       </div>
//                     </div>

//                     {/* VS & time */}
//                     <div className="text-center flex flex-col items-center">
//                       <div className="text-xs text-gray-500">{m.time}</div>
//                       <div className="text-sm font-bold">VS</div>
//                     </div>

//                     {/* Team B */}
//                     <div className="flex items-center gap-3 justify-end min-w-0">
//                       <div className="text-sm font-semibold truncate text-right">
//                         {m.teamB}
//                       </div>
//                       <img
//                         src={getLogo(m.teamB)}
//                         alt={m.teamB}
//                         className="w-12 h-12 object-contain"
//                       />
//                     </div>

//                     {/* Status */}
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
//                     >
//                       {status.toUpperCase()}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Matches;

// src/pages/Matches.jsx
import React from "react";
import teamsLogos from "../assets/data/logo";
import matches from "../assets/data/matches";

// 🧠 Get team logo dynamically
const getLogo = (name) => {
  const key = name.toLowerCase().split(" ")[0];
  return teamsLogos[key] || teamsLogos.kolkata;
};

// 🎯 Determine match status by comparing with current date/time
const getMatchStatus = (match) => {
  const now = new Date();
  const matchStart = new Date(`${match.date}T${match.time}`);
  const matchEnd = new Date(matchStart.getTime() + 2 * 60 * 60 * 1000); // assume 2-hour match

  if (now > matchEnd) return "completed";
  if (now >= matchStart && now <= matchEnd) return "ongoing";
  return "upcoming";
};

const statusStyles = {
  completed: "bg-red-500 text-white border border-red-700",
  upcoming: "bg-emerald-500 text-white border border-emerald-600",
  ongoing: "bg-emerald-500 text-white border border-emerald-600 animate-pulse",
};

const Matches = () => {
  // Sort matches by date/time
  const sorted = [...matches].sort(
    (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
  );

  // Group by date for display
  const grouped = sorted.reduce((acc, m) => {
    const d = m.date;
    if (!acc[d]) acc[d] = [];
    acc[d].push(m);
    return acc;
  }, {});

  return (
    <section className="min-h-screen bg-[#111] text-white pt-10 pb-30 px-5 md:px-12 md:pb-40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-amber-400">
              Matches
            </h1>
            <p className="text-gray-300 mt-1">
              Automatically tracked by date &amp; time
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
              <span className="text-gray-300">Upcoming / Ongoing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 block" />
              <span className="text-gray-300">Completed</span>
            </div>
          </div>
        </header>

        {/* Matches by Date */}
        {Object.keys(grouped).map((date) => (
          <div
            key={date}
            className="bg-[#0f0f0f] rounded-2xl p-5 shadow mb-6 border border-[#222]"
          >
            <h2 className="text-lg font-semibold text-gray-200 mb-4">
              {new Date(date).toLocaleDateString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {grouped[date].map((m) => {
                const status = getMatchStatus(m);
                return (
                  <div
                    key={m.id}
                    className="flex items-center justify-between gap-4 p-4 rounded-lg border border-[#222] hover:shadow-lg transition bg-[#3c3b3b]"
                  >
                    {/* Team A */}
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={getLogo(m.teamA)}
                        alt={m.teamA}
                        className="w-12 h-12 object-contain"
                      />
                      <div className="text-sm font-semibold truncate text-gray-100">
                        {m.teamA}
                      </div>
                    </div>

                    {/* VS & time */}
                    <div className="text-center flex flex-col items-center text-gray-300">
                      <div className="text-xs">{m.time}</div>
                      <div className="text-sm font-bold text-amber-400">VS</div>
                    </div>

                    {/* Team B */}
                    <div className="flex items-center gap-3 justify-end min-w-0">
                      <div className="text-sm font-semibold truncate text-right text-gray-100">
                        {m.teamB}
                      </div>
                      <img
                        src={getLogo(m.teamB)}
                        alt={m.teamB}
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    {/* Status */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
                    >
                      {status.toUpperCase()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Matches;
