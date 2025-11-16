// src/pages/TeamDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import teams from "../assets/data/teams/index";

const PlayerRow = ({ p }) => (
  <div className="flex items-center justify-between gap-4 p-3 rounded-md bg-white/5">
    <div className="flex items-center gap-4 min-w-0">
      {/* optional: player.photo if available */}
      {p.photo ? (
        <img
          src={p.photo}
          alt={p.name}
          className="w-12 h-12 object-cover rounded"
        />
      ) : (
        <div className="w-12 h-12 bg-sky-700/20 rounded flex items-center justify-center text-xs font-bold text-sky-200">
          {p.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
      )}

      <div className="min-w-0">
        <div className="font-medium truncate">
          {p.name} <span className="text-xs text-gray-400">#{p.number}</span>
        </div>
        <div className="text-xs text-gray-400">
          {p.position} • {p.nationality ?? "—"}
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <span className="w-4 h-4 bg-yellow-400 rounded-sm" />
        <span className="text-sm font-semibold">{p.yellowCards ?? 0}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="w-4 h-4 bg-red-500 rounded-sm" />
        <span className="text-sm font-semibold">{p.redCards ?? 0}</span>
      </div>
    </div>
  </div>
);

const TeamDetail = () => {
  const { slug } = useParams();

  // find team by slug
  const team = teams.find((t) => t.slug === slug);

  if (!team) {
    return (
      <section className="p-6">
        <h2 className="text-xl font-semibold">Team not found</h2>
        <p className="text-sm text-gray-500 mt-2">
          We couldn't find that team.
        </p>
        <Link
          to="/teams"
          className="inline-block mt-4 text-amber-400 font-semibold"
        >
          Back to teams
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-full p-6 bg-[#0b0b0b] text-white">
      <div className="flex items-center gap-6 mb-6">
        <img
          src={team.logo}
          alt={team.name}
          className="w-24 h-24 object-contain rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold text-amber-400">{team.name}</h1>
          <p className="text-sm text-gray-400">
            {team.players?.length ?? team.players} players
          </p>
          <div className="text-xs text-gray-500 mt-1">
            W {team.won} • L {team.lost} • D {team.draw}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {team.players && team.players.length ? (
          team.players.map((p) => <PlayerRow key={p.id} p={p} />)
        ) : (
          <p className="text-gray-400">No player data available.</p>
        )}
      </div>
    </section>
  );
};

export default TeamDetail;
