import React, { useMemo } from "react";
import teamsData from "../assets/data/teams/index";
import { computeFromTeams } from "../utils/standingsFromTeams";

const Standings = () => {
  // compute & sort automatically (winPoints:2, drawPoints:1)
  const table = useMemo(
    () => computeFromTeams(teamsData, { winPoints: 2, drawPoints: 1 }),
    [teamsData]
  );

  return (
    <section className="min-h-full bg-gradient-to-b from-white to-sky-300 px-4 pt-10 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-700 leading-tight">
              League Standings
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Automatically computed from team W / L / D — points = (W × 2) + (D
              × 1)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500">Legend</div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 bg-green-100 rounded-sm border border-green-200" />
              <span className="text-gray-600">Wins</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 bg-amber-100 rounded-sm border border-amber-200" />
              <span className="text-gray-600">Draws</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 bg-rose-100 rounded-sm border border-rose-200" />
              <span className="text-gray-600">Losses</span>
            </div>
          </div>
        </header>

        {/* Desktop table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden border">
          <div className="overflow-x-auto">
            <table className="w-full text-sm table-fixed">
              <thead className="bg-sky-50 text-sky-700">
                <tr className="text-left">
                  <th className="p-3 w-14">Pos</th>
                  <th className="p-3">Team</th>
                  <th className="p-3 text-center w-14">Pl</th>
                  <th className="p-3 text-center w-14">W</th>
                  <th className="p-3 text-center w-14">L</th>
                  <th className="p-3 text-center w-14">D</th>
                  <th className="p-3 text-right w-20">Pts</th>
                </tr>
              </thead>

              <tbody>
                {table.map((r, idx) => (
                  <tr
                    key={r.slug || r.name}
                    className={`border-t transition-colors hover:bg-sky-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-white/95"
                    }`}
                  >
                    <td className="p-3 font-medium">{r.pos}</td>

                    <td className="p-3 flex items-center gap-3">
                      {r.logo ? (
                        <img
                          src={r.logo}
                          alt={r.name}
                          className="w-8 h-8 object-contain rounded"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-sky-100 text-xs flex items-center justify-center rounded font-bold text-sky-700">
                          {r.name
                            .split(" ")
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                      )}

                      <div className="min-w-0">
                        <div className="font-semibold text-sky-700 truncate">
                          {r.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Players:{" "}
                          <span>
                            {Array.isArray(r.players)
                              ? r.players.length
                              : r.players ?? "—"}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="p-3 text-center">{r.played}</td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 rounded text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
                        {r.won}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 rounded text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100">
                        {r.lost}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                        {r.draw}
                      </span>
                    </td>
                    <td className="p-3 text-right font-bold text-sky-700">
                      {r.pts}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile list (compact cards) */}
        <div className="md:hidden space-y-3">
          {table.map((r) => (
            <div
              key={r.slug || r.name}
              className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3 min-w-0">
                {r.logo ? (
                  <img
                    src={r.logo}
                    alt={r.name}
                    className="w-12 h-12 object-contain rounded"
                  />
                ) : (
                  <div className="w-12 h-12 bg-sky-100 text-sm flex items-center justify-center rounded font-bold text-sky-700">
                    {r.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}

                <div className="min-w-0">
                  <div className="font-semibold text-sky-700 truncate">
                    {r.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    Players:{" "}
                    {Array.isArray(r.players)
                      ? r.players.length
                      : r.players ?? "—"}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-bold text-sky-700">
                  {r.pts} pts
                </div>
                <div className="text-xs text-gray-500">
                  P {r.played} • W {r.won} • D {r.draw}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standings;
