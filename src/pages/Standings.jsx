import React, { useMemo } from "react";

/**
 * Standings.jsx
 *
 * - Exports a Standings component that computes W / L / D (draw) from matches.
 * - Accepts optional `matches` and `teams` props. If omitted, uses built-in dummy data.
 *
 * Match shape expected:
 * {
 *   id,
 *   date: "YYYY-MM-DD",
 *   time: "HH:MM",
 *   teamA: "Team Name",
 *   teamB: "Team Name",
 *   scoreA: number | null,
 *   scoreB: number | null,
 *   status: "completed" | "upcoming" | "ongoing" (optional)
 * }
 *
 * Scoring:
 *  Win = 2 pts, Draw = 1 pt, Loss = 0 pts
 */

/* --- Dummy teams and matches (fallback) --- */
const defaultTeams = [
  "Kolkata Titans",
  "Howrah Warriors",
  "Tech United",
  "AI Avengers",
  "Code Crusaders",
  "Metro Mariners",
  "Royal Strikers",
  "Storm Breakers",
];

const sampleMatches = [
  {
    id: 1,
    teamA: "Kolkata Titans",
    teamB: "Howrah Warriors",
    scoreA: 80,
    scoreB: 72,
    date: "2025-11-01",
  },
  {
    id: 2,
    teamA: "Tech United",
    teamB: "AI Avengers",
    scoreA: 95,
    scoreB: 95,
    date: "2025-11-01",
  }, // draw
  {
    id: 3,
    teamA: "Code Crusaders",
    teamB: "Metro Mariners",
    scoreA: 67,
    scoreB: 70,
    date: "2025-11-02",
  },
  {
    id: 4,
    teamA: "Royal Strikers",
    teamB: "Storm Breakers",
    scoreA: 88,
    scoreB: 60,
    date: "2025-11-02",
  },
  {
    id: 5,
    teamA: "Kolkata Titans",
    teamB: "Tech United",
    scoreA: 101,
    scoreB: 99,
    date: "2025-11-03",
  },
  {
    id: 6,
    teamA: "Howrah Warriors",
    teamB: "AI Avengers",
    scoreA: 82,
    scoreB: 82,
    date: "2025-11-03",
  }, // draw
  {
    id: 7,
    teamA: "Code Crusaders",
    teamB: "Royal Strikers",
    scoreA: 75,
    scoreB: 80,
    date: "2025-11-04",
  },
  {
    id: 8,
    teamA: "Metro Mariners",
    teamB: "Storm Breakers",
    scoreA: 68,
    scoreB: 68,
    date: "2025-11-04",
  }, // draw
  {
    id: 9,
    teamA: "AI Avengers",
    teamB: "Code Crusaders",
    scoreA: 90,
    scoreB: 85,
    date: "2025-11-05",
  },
  {
    id: 10,
    teamA: "Tech United",
    teamB: "Royal Strikers",
    scoreA: 77,
    scoreB: 80,
    date: "2025-11-05",
  },
  // add more as needed...
];

/* --- Utility: compute standings --- */
const computeStandings = (teamsList, matchesList) => {
  // initialize table
  const table = {};
  teamsList.forEach((t) => {
    table[t] = {
      team: t,
      played: 0,
      won: 0,
      lost: 0,
      draw: 0,
      pts: 0,
      scored: 0, // total score for
      conceded: 0, // total score against
      diff: 0,
    };
  });

  matchesList.forEach((m) => {
    const { teamA, teamB, scoreA, scoreB } = m;

    // only count completed matches (both scores present)
    if (scoreA == null || scoreB == null) return;

    // ensure teams exist in the table (if custom team names used)
    if (!table[teamA]) {
      table[teamA] = {
        team: teamA,
        played: 0,
        won: 0,
        lost: 0,
        draw: 0,
        pts: 0,
        scored: 0,
        conceded: 0,
        diff: 0,
      };
    }
    if (!table[teamB]) {
      table[teamB] = {
        team: teamB,
        played: 0,
        won: 0,
        lost: 0,
        draw: 0,
        pts: 0,
        scored: 0,
        conceded: 0,
        diff: 0,
      };
    }

    // update played and scores
    table[teamA].played += 1;
    table[teamB].played += 1;

    table[teamA].scored += Number(scoreA);
    table[teamA].conceded += Number(scoreB);
    table[teamB].scored += Number(scoreB);
    table[teamB].conceded += Number(scoreA);

    // result
    if (scoreA > scoreB) {
      table[teamA].won += 1;
      table[teamB].lost += 1;
      table[teamA].pts += 2; // win points
    } else if (scoreA < scoreB) {
      table[teamB].won += 1;
      table[teamA].lost += 1;
      table[teamB].pts += 2;
    } else {
      // draw
      table[teamA].draw += 1;
      table[teamB].draw += 1;
      table[teamA].pts += 1;
      table[teamB].pts += 1;
    }

    // update diff
    table[teamA].diff = table[teamA].scored - table[teamA].conceded;
    table[teamB].diff = table[teamB].scored - table[teamB].conceded;
  });

  // convert to array and sort: pts desc, won desc, diff desc, scored desc
  const arr = Object.values(table).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.won !== a.won) return b.won - a.won;
    if (b.diff !== a.diff) return b.diff - a.diff;
    if (b.scored !== a.scored) return b.scored - a.scored;
    return a.team.localeCompare(b.team);
  });

  // add position
  return arr.map((row, idx) => ({ ...row, pos: idx + 1 }));
};

/* --- Standings component --- */
const Standings = ({ teams = defaultTeams, matches = sampleMatches }) => {
  const table = useMemo(
    () => computeStandings(teams, matches),
    [teams, matches]
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600">
            League Standings
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Wins / Losses / Draws calculated from provided match results
          </p>
        </header>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="bg-sky-50 text-left text-gray-600">
                <th className="p-3 w-12">#</th>
                <th className="p-3">Team</th>
                <th className="p-3 text-center">P</th>
                <th className="p-3 text-center">W</th>
                <th className="p-3 text-center">L</th>
                <th className="p-3 text-center">D</th>
                <th className="p-3 text-center">For</th>
                <th className="p-3 text-center">Against</th>
                <th className="p-3 text-center">Diff</th>
                <th className="p-3 text-right">Pts</th>
              </tr>
            </thead>

            <tbody>
              {table.map((row) => (
                <tr key={row.team} className="border-t hover:bg-sky-50">
                  <td className="p-3 font-medium">{row.pos}</td>
                  <td className="p-3">{row.team}</td>
                  <td className="p-3 text-center">{row.played}</td>
                  <td className="p-3 text-center text-green-700 font-semibold">
                    {row.won}
                  </td>
                  <td className="p-3 text-center text-rose-600">{row.lost}</td>
                  <td className="p-3 text-center text-amber-600">{row.draw}</td>
                  <td className="p-3 text-center">{row.scored}</td>
                  <td className="p-3 text-center">{row.conceded}</td>
                  <td className="p-3 text-center">{row.diff}</td>
                  <td className="p-3 text-right font-bold">{row.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* empty-state note */}
        {table.every((r) => r.played === 0) && (
          <p className="mt-4 text-center text-gray-500">
            No completed matches yet — feed match results to see standings.
          </p>
        )}
      </div>
    </section>
  );
};

export default Standings;
