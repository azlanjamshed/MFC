import React, { useMemo } from "react";
import teamsData from "../assets/data/teams/index";
import { computeFromTeams } from "../utils/standingsFromTeams";

const Standings = () => {
  const table = useMemo(
    () => computeFromTeams(teamsData, { winPoints: 3, drawPoints: 1 }),
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
            {/* <p className="mt-1 text-sm text-gray-300">
              Points = (Wins × 2) + (Draws × 1)
            </p> */}
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
