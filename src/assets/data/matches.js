// src/assets/data/matches.js
import { teams } from "./teams"; // optional if you want to reference team objects

// If you want date strings + time strings:
export const matches = [
    { id: 1, date: "2025-11-01", time: "14:00", teamA: "Kolkata Titans", teamB: "Howrah Warriors", scoreA: 102, scoreB: 98 },
    { id: 2, date: "2025-11-01", time: "19:00", teamA: "Tech United", teamB: "AI Avengers", scoreA: 145, scoreB: 146 },
    // ... ~18 items; use null for scoreA/scoreB if not played yet
    { id: 18, date: "2025-11-09", time: "20:00", teamA: "Tech United", teamB: "Metro Mariners", scoreA: null, scoreB: null },
];

export default matches;
