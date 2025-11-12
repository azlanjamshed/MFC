// import React from "react";

// /**
//  * Dummy match data: 18 matches total (2 per day x 9 days).
//  * - 8 matches -> status: "completed"
//  * - 2 matches -> status: "ongoing"
//  * - rest -> "upcoming"
//  *
//  * Each match has:
//  *  - id
//  *  - date (YYYY-MM-DD)
//  *  - time (HH:MM)
//  *  - teamA: { name, logo }
//  *  - teamB: { name, logo }
//  *  - status: "completed" | "ongoing" | "upcoming"
//  */

// const teamsLogos = {
//   kolkata:
//     "https://upload.wikimedia.org/wikipedia/en/4/41/Delhi_Capitals_Logo.svg",
//   howrah:
//     "https://upload.wikimedia.org/wikipedia/en/2/25/Chennai_Super_Kings_Logo.svg",
//   tech: "https://upload.wikimedia.org/wikipedia/en/4/41/Mumbai_Indians_Logo.svg",
//   ai: "https://upload.wikimedia.org/wikipedia/en/d/d4/Kolkata_Knight_Riders_Logo.svg",
//   code: "https://upload.wikimedia.org/wikipedia/en/2/2f/Rajasthan_Royals_Logo.svg",
//   metro:
//     "https://upload.wikimedia.org/wikipedia/en/0/06/Sunrisers_Hyderabad_Logo.svg",
//   royal: "https://upload.wikimedia.org/wikipedia/en/6/67/Punjab_Kings_Logo.svg",
//   storm:
//     "https://upload.wikimedia.org/wikipedia/en/5/5c/Delhi_Daredevils_logo.svg",
// };

// const matches = [
//   // Day 1 - 2 matches
//   {
//     id: 1,
//     date: "2025-11-01",
//     time: "14:00",
//     teamA: { name: "Kolkata Titans", logo: teamsLogos.kolkata },
//     teamB: { name: "Howrah Warriors", logo: teamsLogos.howrah },
//     status: "completed",
//     score: "102/8 • 98/9",
//   },
//   {
//     id: 2,
//     date: "2025-11-01",
//     time: "19:00",
//     teamA: { name: "Tech United", logo: teamsLogos.tech },
//     teamB: { name: "AI Avengers", logo: teamsLogos.ai },
//     status: "completed",
//     score: "145/6 • 146/4",
//   },

//   // Day 2
//   {
//     id: 3,
//     date: "2025-11-02",
//     time: "15:00",
//     teamA: { name: "Code Crusaders", logo: teamsLogos.code },
//     teamB: { name: "Metro Mariners", logo: teamsLogos.metro },
//     status: "completed",
//     score: "110/10 • 111/7",
//   },
//   {
//     id: 4,
//     date: "2025-11-02",
//     time: "20:00",
//     teamA: { name: "Royal Strikers", logo: teamsLogos.royal },
//     teamB: { name: "Storm Breakers", logo: teamsLogos.storm },
//     status: "completed",
//     score: "130/9 • 125/10",
//   },

//   // Day 3
//   {
//     id: 5,
//     date: "2025-11-03",
//     time: "14:30",
//     teamA: { name: "Kolkata Titans", logo: teamsLogos.kolkata },
//     teamB: { name: "Tech United", logo: teamsLogos.tech },
//     status: "completed",
//     score: "157/5 • 149/8",
//   },
//   {
//     id: 6,
//     date: "2025-11-03",
//     time: "19:30",
//     teamA: { name: "Howrah Warriors", logo: teamsLogos.howrah },
//     teamB: { name: "AI Avengers", logo: teamsLogos.ai },
//     status: "completed",
//     score: "98/10 • 99/8",
//   },

//   // Day 4
//   {
//     id: 7,
//     date: "2025-11-04",
//     time: "16:00",
//     teamA: { name: "Code Crusaders", logo: teamsLogos.code },
//     teamB: { name: "Royal Strikers", logo: teamsLogos.royal },
//     status: "completed",
//     score: "120/7 • 121/6",
//   },
//   {
//     id: 8,
//     date: "2025-11-04",
//     time: "20:30",
//     teamA: { name: "Metro Mariners", logo: teamsLogos.metro },
//     teamB: { name: "Storm Breakers", logo: teamsLogos.storm },
//     status: "upcoming",
//   },

//   // Day 5
//   {
//     id: 9,
//     date: "2025-11-05",
//     time: "13:00",
//     teamA: { name: "AI Avengers", logo: teamsLogos.ai },
//     teamB: { name: "Code Crusaders", logo: teamsLogos.code },
//     status: "upcoming",
//   },
//   {
//     id: 10,
//     date: "2025-11-05",
//     time: "18:30",
//     teamA: { name: "Tech United", logo: teamsLogos.tech },
//     teamB: { name: "Royal Strikers", logo: teamsLogos.royal },
//     status: "upcoming",
//   },

//   // Day 6
//   {
//     id: 11,
//     date: "2025-11-06",
//     time: "15:00",
//     teamA: { name: "Howrah Warriors", logo: teamsLogos.howrah },
//     teamB: { name: "Metro Mariners", logo: teamsLogos.metro },
//     status: "ongoing",
//     // optional live score snippet
//     score: "67/2 (10.1)",
//   },
//   {
//     id: 12,
//     date: "2025-11-06",
//     time: "20:00",
//     teamA: { name: "Kolkata Titans", logo: teamsLogos.kolkata },
//     teamB: { name: "Storm Breakers", logo: teamsLogos.storm },
//     status: "upcoming",
//   },

//   // Day 7
//   {
//     id: 13,
//     date: "2025-11-07",
//     time: "14:00",
//     teamA: { name: "Royal Strikers", logo: teamsLogos.royal },
//     teamB: { name: "Tech United", logo: teamsLogos.tech },
//     status: "upcoming",
//   },
//   {
//     id: 14,
//     date: "2025-11-07",
//     time: "19:00",
//     teamA: { name: "Howrah Warriors", logo: teamsLogos.howrah },
//     teamB: { name: "Code Crusaders", logo: teamsLogos.code },
//     status: "ongoing",
//     score: "85/3 (12.4)",
//   },

//   // Day 8
//   {
//     id: 15,
//     date: "2025-11-08",
//     time: "16:00",
//     teamA: { name: "Metro Mariners", logo: teamsLogos.metro },
//     teamB: { name: "Kolkata Titans", logo: teamsLogos.kolkata },
//     status: "upcoming",
//   },
//   {
//     id: 16,
//     date: "2025-11-08",
//     time: "20:30",
//     teamA: { name: "Storm Breakers", logo: teamsLogos.storm },
//     teamB: { name: "AI Avengers", logo: teamsLogos.ai },
//     status: "upcoming",
//   },

//   // Day 9
//   {
//     id: 17,
//     date: "2025-11-09",
//     time: "15:30",
//     teamA: { name: "Code Crusaders", logo: teamsLogos.code },
//     teamB: { name: "Royal Strikers", logo: teamsLogos.royal },
//     status: "completed",
//     score: "140/8 • 138/9",
//   },
//   {
//     id: 18,
//     date: "2025-11-09",
//     time: "20:00",
//     teamA: { name: "Tech United", logo: teamsLogos.tech },
//     teamB: { name: "Metro Mariners", logo: teamsLogos.metro },
//     status: "completed",
//     score: "128/7 • 129/4",
//   },
// ];

// const statusStyles = {
//   completed: "bg-red-100 text-red-700 border border-red-200",
//   upcoming: "bg-green-100 text-green-800 border border-green-200",
//   ongoing: "bg-green-100 text-green-800 border border-green-300",
// };

// const groupByDate = (list) =>
//   list.reduce((acc, item) => {
//     if (!acc[item.date]) acc[item.date] = [];
//     acc[item.date].push(item);
//     return acc;
//   }, {});

// const formatDate = (iso) => {
//   // Simple date formatting: YYYY-MM-DD -> e.g., Sat, Nov 01
//   const d = new Date(iso + "T00:00:00");
//   return d.toLocaleDateString(undefined, {
//     weekday: "short",
//     month: "short",
//     day: "numeric",
//   });
// };

// const Matches = () => {
//   const grouped = groupByDate(matches);
//   const dates = Object.keys(grouped).sort();

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900 py-12 px-4 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//           <div>
//             <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600">
//               Matches
//             </h1>
//             <p className="text-gray-600 mt-1">
//               Schedule — two matches each day
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

//         <div className="space-y-8">
//           {dates.map((date) => (
//             <div key={date} className="bg-white rounded-2xl p-5 shadow">
//               <h2 className="text-lg font-semibold text-gray-700 mb-4">
//                 {formatDate(date)}
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {grouped[date].map((m) => (
//                   <div
//                     key={m.id}
//                     className="flex items-center justify-between gap-4 p-4 rounded-lg border border-slate-100 hover:shadow-md transition-shadow"
//                   >
//                     {/* Team A */}
//                     <div className="flex items-center gap-3 min-w-0">
//                       <img
//                         src={m.teamA.logo}
//                         alt={m.teamA.name}
//                         className="w-12 h-12 object-contain"
//                       />
//                       <div className="min-w-0">
//                         <div className="text-sm font-semibold truncate">
//                           {m.teamA.name}
//                         </div>
//                       </div>
//                     </div>

//                     {/* vs and details */}
//                     <div className="text-center">
//                       <div className="text-xs text-gray-500">{m.time}</div>
//                       <div className="text-sm font-bold">VS</div>
//                       <div className="text-xs text-gray-500 mt-1">
//                         {m.teamB.name}
//                       </div>
//                     </div>

//                     {/* Team B */}
//                     <div className="flex items-center gap-3 justify-end min-w-0">
//                       <div className="min-w-0 text-right">
//                         <div className="text-sm font-semibold truncate">
//                           {m.teamB.name}
//                         </div>
//                       </div>
//                       <img
//                         src={m.teamB.logo}
//                         alt={m.teamB.name}
//                         className="w-12 h-12 object-contain"
//                       />
//                     </div>

//                     {/* Status */}
//                     <div className="ml-4 flex flex-col items-end gap-2">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                           statusStyles[m.status]
//                         }`}
//                       >
//                         {m.status === "completed"
//                           ? "COMPLETED"
//                           : m.status.toUpperCase()}
//                       </span>

//                       {m.status === "completed" && m.score ? (
//                         <div className="text-xs text-gray-600">{m.score}</div>
//                       ) : m.status === "ongoing" && m.score ? (
//                         <div className="text-xs text-gray-700">
//                           Live: {m.score}
//                         </div>
//                       ) : null}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Matches;

import React from "react";

const teamsLogos = {
  kolkata:
    "https://upload.wikimedia.org/wikipedia/en/4/41/Delhi_Capitals_Logo.svg",
  howrah:
    "https://upload.wikimedia.org/wikipedia/en/2/25/Chennai_Super_Kings_Logo.svg",
  tech: "https://upload.wikimedia.org/wikipedia/en/4/41/Mumbai_Indians_Logo.svg",
  ai: "https://upload.wikimedia.org/wikipedia/en/d/d4/Kolkata_Knight_Riders_Logo.svg",
  code: "https://upload.wikimedia.org/wikipedia/en/2/2f/Rajasthan_Royals_Logo.svg",
  metro:
    "https://upload.wikimedia.org/wikipedia/en/0/06/Sunrisers_Hyderabad_Logo.svg",
  royal: "https://upload.wikimedia.org/wikipedia/en/6/67/Punjab_Kings_Logo.svg",
  storm:
    "https://upload.wikimedia.org/wikipedia/en/5/5c/Delhi_Daredevils_logo.svg",
};

// ⏱ Dummy matches (2 per day × 9 days)
const matches = [
  {
    id: 1,
    date: "2025-11-10",
    time: "14:00",
    teamA: "Kolkata Titans",
    teamB: "Howrah Warriors",
  },
  {
    id: 2,
    date: "2025-11-10",
    time: "19:00",
    teamA: "Tech United",
    teamB: "AI Avengers",
  },
  {
    id: 3,
    date: "2025-11-11",
    time: "15:00",
    teamA: "Code Crusaders",
    teamB: "Metro Mariners",
  },
  {
    id: 4,
    date: "2025-11-11",
    time: "20:00",
    teamA: "Royal Strikers",
    teamB: "Storm Breakers",
  },
  {
    id: 5,
    date: "2025-11-12",
    time: "14:00",
    teamA: "Kolkata Titans",
    teamB: "Tech United",
  },
  {
    id: 6,
    date: "2025-11-12",
    time: "19:00",
    teamA: "Howrah Warriors",
    teamB: "AI Avengers",
  },
  {
    id: 7,
    date: "2025-11-13",
    time: "16:00",
    teamA: "Code Crusaders",
    teamB: "Royal Strikers",
  },
  {
    id: 8,
    date: "2025-11-13",
    time: "20:30",
    teamA: "Metro Mariners",
    teamB: "Storm Breakers",
  },
  {
    id: 9,
    date: "2025-11-14",
    time: "13:00",
    teamA: "AI Avengers",
    teamB: "Code Crusaders",
  },
  {
    id: 10,
    date: "2025-11-14",
    time: "18:30",
    teamA: "Tech United",
    teamB: "Royal Strikers",
  },
  {
    id: 11,
    date: "2025-11-15",
    time: "15:00",
    teamA: "Howrah Warriors",
    teamB: "Metro Mariners",
  },
  {
    id: 12,
    date: "2025-11-15",
    time: "20:00",
    teamA: "Kolkata Titans",
    teamB: "Storm Breakers",
  },
  {
    id: 13,
    date: "2025-11-16",
    time: "14:00",
    teamA: "Royal Strikers",
    teamB: "Tech United",
  },
  {
    id: 14,
    date: "2025-11-16",
    time: "19:00",
    teamA: "Howrah Warriors",
    teamB: "Code Crusaders",
  },
  {
    id: 15,
    date: "2025-11-17",
    time: "16:00",
    teamA: "Metro Mariners",
    teamB: "Kolkata Titans",
  },
  {
    id: 16,
    date: "2025-11-17",
    time: "20:30",
    teamA: "Storm Breakers",
    teamB: "AI Avengers",
  },
  {
    id: 17,
    date: "2025-11-18",
    time: "15:30",
    teamA: "Code Crusaders",
    teamB: "Royal Strikers",
  },
  {
    id: 18,
    date: "2025-11-18",
    time: "20:00",
    teamA: "Tech United",
    teamB: "Metro Mariners",
  },
];

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
  completed: "bg-red-100 text-red-700 border border-red-200",
  upcoming: "bg-green-100 text-green-700 border border-green-200",
  ongoing: "bg-green-100 text-green-700 border border-green-300 animate-pulse",
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
    <section className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900 py-12 px-5 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600">
              Matches
            </h1>
            <p className="text-gray-600 mt-1">
              Automatically tracked by date & time
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-600 block" />
              <span className="text-sm text-gray-700">Upcoming / Ongoing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600 block" />
              <span className="text-sm text-gray-700">Completed</span>
            </div>
          </div>
        </header>

        {/* Matches by Date */}
        {Object.keys(grouped).map((date) => (
          <div key={date} className="bg-white rounded-2xl p-5 shadow mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
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
                    className="flex items-center justify-between gap-4 p-4 rounded-lg border border-slate-100 hover:shadow-md transition"
                  >
                    {/* Team A */}
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={getLogo(m.teamA)}
                        alt={m.teamA}
                        className="w-12 h-12 object-contain"
                      />
                      <div className="text-sm font-semibold truncate">
                        {m.teamA}
                      </div>
                    </div>

                    {/* VS & time */}
                    <div className="text-center flex flex-col items-center">
                      <div className="text-xs text-gray-500">{m.time}</div>
                      <div className="text-sm font-bold">VS</div>
                    </div>

                    {/* Team B */}
                    <div className="flex items-center gap-3 justify-end min-w-0">
                      <div className="text-sm font-semibold truncate text-right">
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

// import React from "react";
// import matches from "../assets/data/matches"; // default export
// import { teams } from "../assets/data/teams"; // if you need logos

// const getLogo = (teamName) => {
//   const t = teams.find((x) => x.name === teamName);
//   return t?.logo || "/placeholder.png";
// };

// const Matches = () => (
//   <div>
//     {matches.map((m) => (
//       <div key={m.id} className="flex items-center gap-4 p-3 border rounded">
//         <img src={getLogo(m.teamA)} alt={m.teamA} className="w-10 h-10" />
//         <div className="flex-1">
//           <div>
//             {m.teamA} vs {m.teamB}
//           </div>
//           <div className="text-xs text-gray-500">
//             {m.date} • {m.time}
//           </div>
//         </div>
//         <div>{m.scoreA != null ? `${m.scoreA} - ${m.scoreB}` : "TBD"}</div>
//       </div>
//     ))}
//   </div>
// );

// export default Matches;
