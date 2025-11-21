// import React from "react";
// import teamsLogos from "../assets/data/logo";
// import matches from "../assets/data/matches";

// const resolveLogo = (team) => {
//   // if team is an object with logo, use it
//   if (team && typeof team === "object") {
//     return (
//       team.logo ||
//       teamsLogos[team.key] ||
//       teamsLogos[team.slug] ||
//       teamsLogos.kolkata
//     );
//   }

//   if (typeof team === "string") {
//     const key = team.toLowerCase().split(" ")[0];
//     return teamsLogos[key] || teamsLogos.kolkata;
//   }
//   return teamsLogos.kolkata;
// };

// const resolveName = (team) => {
//   if (team && typeof team === "object")
//     return team.name || team.slug || "Unknown";
//   if (typeof team === "string") return team;
//   return "Unknown";
// };

// const getMatchStatus = (match) => {
//   if (match.scoreA != null && match.scoreB != null) return "completed";

//   const now = new Date();
//   const matchStart = new Date(`${match.date}T${match.time}`);
//   const matchEnd = new Date(matchStart.getTime() + 60 * 60 * 1000); // 2-hour window

//   if (now > matchEnd) return "completed";
//   if (now >= matchStart && now <= matchEnd) return "ongoing";
//   return "upcoming";
// };

// const statusStyles = {
//   completed: "bg-red-500 text-white border border-red-700",
//   upcoming: "bg-emerald-500 text-white border border-emerald-600",
//   ongoing: "bg-emerald-500 text-white border border-emerald-600 animate-pulse",
// };

// const Matches = () => {
//   const sorted = [...matches].sort(
//     (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
//   );

//   const grouped = sorted.reduce((acc, m) => {
//     const d = m.date;
//     if (!acc[d]) acc[d] = [];
//     acc[d].push(m);
//     return acc;
//   }, {});

//   return (
//     <section className="min-h-screen bg-[#111] text-white pt-10 pb-30 px-5 md:px-12 md:pb-40">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
//           <div>
//             <h1 className="text-3xl md:text-4xl font-extrabold text-amber-400">
//               Matches
//             </h1>
//           </div>

//           <div className="flex items-center gap-4 text-sm">
//             <div className="flex items-center gap-2">
//               <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
//               <span className="text-gray-300">Upcoming / Ongoing</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-3 h-3 rounded-full bg-red-500 block" />
//               <span className="text-gray-300">Completed</span>
//             </div>
//           </div>
//         </header>

//         {Object.keys(grouped).map((date) => (
//           <div
//             key={date}
//             className="bg-[#0f0f0f] rounded-2xl p-5 shadow mb-6 border border-[#222]"
//           >
//             <h2 className="text-lg font-semibold text-gray-200 mb-4">
//               {new Date(date).toLocaleDateString(undefined, {
//                 weekday: "short",
//                 month: "short",
//                 day: "numeric",
//               })}
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {grouped[date].map((m) => {
//                 const status = getMatchStatus(m);
//                 const logoA = resolveLogo(m.teamA);
//                 const logoB = resolveLogo(m.teamB);
//                 const nameA = resolveName(m.teamA);
//                 const nameB = resolveName(m.teamB);
//                 const isCompleted = status === "completed";

//                 return (
//                   <div
//                     key={m.id}
//                     className="flex items-center justify-between gap-4 p-4 rounded-lg border border-[#222] hover:shadow-lg transition bg-[#3c3b3b]"
//                   >
//                     {/* Team A */}
//                     <div className="flex items-center gap-3 min-w-0">
//                       <img
//                         src={logoA}
//                         alt={nameA}
//                         className="w-12 h-12 object-contain"
//                       />
//                       <div className="text-sm font-semibold truncate text-gray-100">
//                         {nameA}
//                       </div>
//                     </div>

//                     <div className="text-center flex flex-col items-center text-gray-300">
//                       <div className="text-xs">{m.time}</div>

//                       {isCompleted && m.scoreA != null && m.scoreB != null ? (
//                         <div className="text-xs font-bold text-amber-400">
//                           {m.scoreA}—{m.scoreB}
//                         </div>
//                       ) : (
//                         <div className="text-sm font-bold text-amber-400">
//                           VS
//                         </div>
//                       )}
//                     </div>

//                     {/* Team B */}
//                     <div className="flex items-center gap-3 justify-end min-w-0">
//                       <div className="text-sm font-semibold truncate text-right text-gray-100">
//                         {nameB}
//                       </div>
//                       <img
//                         src={logoB}
//                         alt={nameB}
//                         className="w-12 h-12 object-contain"
//                       />
//                     </div>

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
import React from "react";
import teamsLogos from "../assets/data/logo";
import matches from "../assets/data/matches";

const resolveLogo = (team) => {
  // if team is an object with logo, use it
  if (team && typeof team === "object") {
    return (
      team.logo ||
      teamsLogos[team.key] ||
      teamsLogos[team.slug] ||
      teamsLogos.kolkata
    );
  }

  // if team is a string like "TBD" or "Super Strikers"
  if (typeof team === "string") {
    const key = team.toLowerCase().split(" ")[0];
    return teamsLogos[key] || teamsLogos.kolkata;
  }

  return teamsLogos.kolkata;
};

const resolveName = (team) => {
  if (team && typeof team === "object") {
    return team.name || team.slug || "Unknown";
  }
  if (typeof team === "string") return team;
  return "Unknown";
};

const getMatchStatus = (match) => {
  // 🔥 If date is TBD (Play Off / Final), always show as UPCOMING until played
  if (!match.date || match.date === "TBD") {
    return "upcoming";
  }

  const now = new Date();
  const matchStart = new Date(`${match.date}T${match.time}`);
  const matchEnd = new Date(matchStart.getTime() + 60 * 60 * 1000); // 1 hour window

  if (now > matchEnd) {
    if (match.scoreA != null && match.scoreB != null) {
      return "completed";
    }
    return "completed";
  }

  if (now >= matchStart && now <= matchEnd) return "ongoing";

  return "upcoming";
};

const statusStyles = {
  completed: "bg-red-500 text-white border border-red-700",
  upcoming: "bg-emerald-500 text-white border border-emerald-600",
  ongoing: "bg-emerald-500 text-white border border-emerald-600 animate-pulse",
};

const Matches = () => {
  // League stage: real dates
  const leagueMatches = matches.filter((m) => m.date && m.date !== "TBD");

  // Knockout: split Play Off and Final
  const playoffMatches = matches.filter((m) => m.match === "Play Off");
  const finalMatch = matches.find((m) => m.match === "Final");

  // Sort league matches by date/time
  const sortedLeague = [...leagueMatches].sort(
    (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
  );

  // Group league matches by date
  const grouped = sortedLeague.reduce((acc, m) => {
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

        {/* League Stage (date-wise pairs) */}
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
                const logoA = resolveLogo(m.teamA);
                const logoB = resolveLogo(m.teamB);
                const nameA = resolveName(m.teamA);
                const nameB = resolveName(m.teamB);
                const isCompleted = status === "completed";

                return (
                  <div
                    key={m.id}
                    className="flex items-center justify-between gap-4 p-4 rounded-lg border border-[#222] hover:shadow-lg transition bg-[#3c3b3b]"
                  >
                    {/* Team A */}
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={logoA}
                        alt={nameA}
                        className="w-12 h-12 object-contain"
                      />
                      <div className="text-sm font-semibold truncate text-gray-100">
                        {nameA}
                      </div>
                    </div>

                    {/* Center: time + score / VS */}
                    <div className="text-center flex flex-col items-center text-gray-300">
                      <div className="text-xs">{m.time}</div>

                      {isCompleted && m.scoreA != null && m.scoreB != null ? (
                        <div className="text-xs font-bold text-amber-400">
                          {m.scoreA}—{m.scoreB}
                        </div>
                      ) : (
                        <div className="text-sm font-bold text-amber-400">
                          VS
                        </div>
                      )}
                    </div>

                    {/* Team B */}
                    <div className="flex items-center gap-3 justify-end min-w-0">
                      <div className="text-sm font-semibold truncate text-right text-gray-100">
                        {nameB}
                      </div>
                      <img
                        src={logoB}
                        alt={nameB}
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    {/* Status badge */}
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

        {/* Knockout Stage - Only Play Off */}
        {playoffMatches.length > 0 && (
          <div className="mt-10 bg-[#0f0f0f] rounded-2xl p-5 shadow border border-[#222]">
            <h2 className="text-xl font-bold text-amber-400 mb-4">
              Knockout Stage – Play Off
            </h2>

            <div className="flex flex-col gap-4">
              {playoffMatches.map((m) => {
                const status = getMatchStatus(m); // will be "upcoming"
                const logoA = resolveLogo(m.teamA);
                const logoB = resolveLogo(m.teamB);
                const nameA = resolveName(m.teamA);
                const nameB = resolveName(m.teamB);

                return (
                  <div
                    key={m.id}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg border border-[#222] hover:shadow-lg transition bg-[#1b1b1b]"
                  >
                    {/* Left: Match label + meta */}
                    <div className="flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-widest text-gray-400">
                        {m.match}
                      </span>
                      <span className="text-sm text-gray-300">
                        Date: {m.date === "TBD" ? "TBD" : m.date} •{" "}
                        {m.time || "Time: TBD"}
                      </span>
                    </div>

                    {/* Middle: Teams */}
                    <div className="flex items-center justify-center gap-6 flex-1">
                      {/* Team A */}
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={logoA}
                          alt={nameA}
                          className="w-12 h-12 object-contain"
                        />
                        <div className="text-sm font-semibold truncate text-gray-100">
                          {nameA}
                        </div>
                      </div>

                      <div className="text-center flex flex-col items-center text-gray-300">
                        <div className="text-xs text-gray-400">{m.match}</div>
                        <div className="text-sm font-bold text-amber-400">
                          VS
                        </div>
                      </div>

                      {/* Team B */}
                      <div className="flex items-center gap-3 justify-end min-w-0">
                        <div className="text-sm font-semibold truncate text-right text-gray-100">
                          {nameB}
                        </div>
                        <img
                          src={logoB}
                          alt={nameB}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>

                    {/* Status */}
                    <span
                      className={`self-start md:self-auto px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
                    >
                      {status.toUpperCase()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Final Match Section */}
        {finalMatch && (
          <div className="mt-8 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent rounded-2xl p-5 shadow border border-amber-500/60">
            <h2 className="text-xl font-extrabold text-amber-300 mb-3 flex items-center gap-2">
              🏆 Grand Final
            </h2>

            {(() => {
              const m = finalMatch;
              const status = getMatchStatus(m); // will be "upcoming"
              const logoA = resolveLogo(m.teamA);
              const logoB = resolveLogo(m.teamB);
              const nameA = resolveName(m.teamA);
              const nameB = resolveName(m.teamB);

              return (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 p-4 rounded-xl bg-[#111] border border-[#444]">
                  {/* Left: Info */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-gray-400">
                      Final
                    </span>
                    <span className="text-sm text-gray-300">
                      Date: {m.date === "TBD" ? "TBD" : m.date} •{" "}
                      {m.time || "Time: TBD"}
                    </span>
                    <span className="text-xs text-gray-400">
                      Winner of Play Off vs Super Strikers
                    </span>
                  </div>

                  {/* Center: Big VS */}
                  <div className="flex items-center justify-center gap-6 flex-1">
                    {/* Team A */}
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={logoA}
                        alt={nameA}
                        className="w-14 h-14 object-contain"
                      />
                      <div className="text-base font-semibold truncate text-gray-100">
                        {nameA}
                      </div>
                    </div>

                    <div className="text-center flex flex-col items-center text-gray-300">
                      <div className="text-xs text-gray-400">Final</div>
                      <div className="text-lg font-extrabold text-amber-300">
                        VS
                      </div>
                    </div>

                    {/* Team B */}
                    <div className="flex items-center gap-3 justify-end min-w-0">
                      <div className="text-base font-semibold truncate text-right text-gray-100">
                        {nameB}
                      </div>
                      {/* <img
                        src={logoB}
                        alt={nameB}
                        className="w-14 h-14 object-contain"
                      /> */}
                    </div>
                  </div>

                  {/* Status */}
                  <span
                    className={`self-start md:self-auto px-4 py-1.5 rounded-full text-xs font-semibold ${statusStyles[status]}`}
                  >
                    {status.toUpperCase()}
                  </span>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};

export default Matches;
