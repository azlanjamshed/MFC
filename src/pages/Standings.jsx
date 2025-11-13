// src/pages/Standings.jsx
import React, { useMemo } from "react";
import teamsData from "../assets/data/teams";
import { computeFromTeams } from "../utils/standingsFromTeams";

const Standings = () => {
  // compute & sort automatically (winPoints:2, drawPoints:1). Change numbers if needed.
  const table = useMemo(
    () => computeFromTeams(teamsData, { winPoints: 2, drawPoints: 1 }),
    [teamsData]
  );

  return (
    <section className="h-[824px] bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Standings</h2>

        <div className="bg-gray-50 rounded-lg shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-white border-b">
              <tr>
                <th className="p-3 text-left w-12">Pos</th>
                <th className="p-3 text-left">Team</th>
                <th className="p-3 text-center">Pl</th>
                <th className="p-3 text-center">W</th>
                <th className="p-3 text-center">L</th>
                <th className="p-3 text-center">D</th>
                <th className="p-3 text-right">Pts</th>
              </tr>
            </thead>

            <tbody>
              {table.map((r) => (
                <tr
                  key={r.slug || r.name}
                  className="border-b hover:bg-white/50"
                >
                  <td className="p-3">{r.pos}</td>
                  <td className="p-3 flex items-center gap-3">
                    {r.logo ? (
                      <img
                        src={r.logo}
                        alt={r.name}
                        className="w-7 h-7 object-contain rounded-sm"
                      />
                    ) : (
                      <div className="w-7 h-7 bg-sky-100 text-xs flex items-center justify-center rounded-sm font-bold text-sky-700">
                        {r.name
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}
                    <span>{r.name}</span>
                  </td>
                  <td className="p-3 text-center">{r.played}</td>
                  <td className="p-3 text-center text-green-700 font-semibold">
                    {r.won}
                  </td>
                  <td className="p-3 text-center text-rose-600">{r.lost}</td>
                  <td className="p-3 text-center text-amber-600">{r.draw}</td>
                  <td className="p-3 text-right font-bold">{r.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Standings;
