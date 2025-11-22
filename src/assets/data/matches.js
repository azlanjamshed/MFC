// import teams from "./teams/index.js"; // imports all teams (chunchun, invincible, etc.)

// // A small helper to get team info by slug
// const getTeamBySlug = (slug) => teams.find((t) => t.slug === slug);

// const matches = [
//     // ───────────── 2025-11-10 ─────────────
//     {
//         id: 1,
//         date: "2025-11-10",
//         time: "17:00",
//         teamA: getTeamBySlug("thunderhawks"),
//         teamB: getTeamBySlug("superStrikers"),
//         scoreA: 1,
//         scoreB: 0, // completed
//     },
//     {
//         id: 2,
//         date: "2025-11-10",
//         time: "18:00",
//         teamA: getTeamBySlug("chunchunMaru"),
//         teamB: getTeamBySlug("zandaGaru"),
//         scoreA: 0,
//         scoreB: 0, // completed (draw)
//     },

//     // ───────────── 2025-11-11 ─────────────
//     {
//         id: 3,
//         date: "2025-11-11",
//         time: "17:00",
//         teamA: getTeamBySlug("invincible"),
//         teamB: getTeamBySlug("chunchunMaru"),
//         scoreA: 0,
//         scoreB: 0,
//     },
//     {
//         id: 4,
//         date: "2025-11-11",
//         time: "18:00",
//         teamA: getTeamBySlug("zandaGaru"),
//         teamB: getTeamBySlug("thunderhawks"),
//         scoreA: 0,
//         scoreB: 0,
//     },

//     // ───────────── 2025-11-12 ─────────────
//     {
//         id: 5,
//         date: "2025-11-12",
//         time: "16:00",
//         teamA: getTeamBySlug("superStrikers"),
//         teamB: getTeamBySlug("zandaGaru"),
//         scoreA: 0,
//         scoreB: 0, // completed
//     },
//     {
//         id: 6,
//         date: "2025-11-12",
//         time: "17:00",
//         teamA: getTeamBySlug("invincible"),
//         teamB: getTeamBySlug("thunderhawks"),
//         scoreA: 1,
//         scoreB: 1,
//     },

//     // ───────────── 2025-11-13 ─────────────
//     {
//         id: 7,
//         date: "2025-11-13",
//         time: "16:00",
//         teamA: getTeamBySlug("superStrikers"),
//         teamB: getTeamBySlug("chunchunMaru"),
//         scoreA: 0,
//         scoreB: 0,  // completed
//     },
//     {
//         id: 8,
//         date: "2025-11-13",
//         time: "17:00",
//         teamA: getTeamBySlug("invincible"),
//         teamB: getTeamBySlug("zandaGaru"),
//         scoreA: 0,
//         scoreB: 0,
//     },

//     // ───────────── 2025-11-14 ─────────────
//     {
//         id: 9,
//         date: "2025-11-14",
//         time: "16:00",
//         teamA: getTeamBySlug("superStrikers"),
//         teamB: getTeamBySlug("invincible"),
//         scoreA: 0,
//         scoreB: 0,
//     },
//     {
//         id: 10,
//         date: "2025-11-14",
//         time: "17:00",
//         teamA: getTeamBySlug("thunderhawks"),
//         teamB: getTeamBySlug("chunchunMaru"),
//         scoreA: 0,
//         scoreB: 0,
//     },

//     // ───────────── 2025-11-17 ─────────────
//     {
//         id: 11,
//         date: "2025-11-17",
//         time: "16:00",
//         teamA: getTeamBySlug("chunchunMaru"),
//         teamB: getTeamBySlug("superStrikers"),
//         scoreA: 1,
//         scoreB: 0,
//     },
//     {
//         id: 12,
//         date: "2025-11-17",
//         time: "17:00",
//         teamA: getTeamBySlug("zandaGaru"),
//         teamB: getTeamBySlug("invincible"),
//         scoreA: 0,
//         scoreB: 0,
//     },

//     // ───────────── 2025-11-18 ─────────────
//     {
//         id: 13,
//         date: "2025-11-18",
//         time: "16:00",
//         teamA: getTeamBySlug("superStrikers"),
//         teamB: getTeamBySlug("zandaGaru"),
//         scoreA: 1,
//         scoreB: 0,
//     },
//     {
//         id: 14,
//         date: "2025-11-18",
//         time: "17:00",
//         teamA: getTeamBySlug("chunchunMaru"),
//         teamB: getTeamBySlug("thunderhawks"),
//         scoreA: 0,
//         scoreB: 0,

//     },



//     // ───────────── 2025-11-19 ─────────────
//     {
//         id: 15,
//         date: "2025-11-19",
//         time: "16:00",
//         teamA: getTeamBySlug("superStrikers"),
//         teamB: getTeamBySlug("thunderhawks"),
//         scoreA: 1,
//         scoreB: 0,
//     },
//     {
//         id: 16,
//         date: "2025-11-19",
//         time: "17:00",
//         teamA: getTeamBySlug("chunchunMaru"),
//         teamB: getTeamBySlug("invincible"),
//         scoreA: 2,
//         scoreB: 0,
//     },

//     // ───────────── 2025-11-20 ─────────────

//     {
//         id: 17,
//         date: "2025-11-20",
//         time: "16:00",
//         teamA: getTeamBySlug("invincible"),
//         teamB: getTeamBySlug("thunderhawks"),
//         scoreA: 0,
//         scoreB: 0,

//     },
//     {
//         id: 18,
//         date: "2025-11-20",
//         time: "17:00",
//         teamA: getTeamBySlug("chunchunMaru"),
//         teamB: getTeamBySlug("zandaGaru"),
//         scoreA: 0,
//         scoreB: 1,
//     },
//     // ───────────── 2025-11-21 ─────────────
//     {
//         id: 19,
//         date: "2025-11-21",
//         time: "16:00",
//         teamA: getTeamBySlug("zandaGaru"),
//         teamB: getTeamBySlug("thunderhawks"),
//         scoreA: 0,
//         scoreB: 0,

//     },
//     {
//         id: 20,
//         date: "2025-11-21",
//         time: "17:00",
//         teamA: getTeamBySlug("superStrikers"),
//         teamB: getTeamBySlug("invincible"),
//         scoreA: 2,
//         scoreB: 0,
//     },
//     //-------------------------------
//     {
//         id: 21,
//         match: "Play Off",
//         date: "TBD",
//         time: "17:00",
//         teamA: getTeamBySlug("chunchunMaru"),
//         teamB: getTeamBySlug("thunderhawks"),
//         scoreA: 0,
//         scoreB: 0,
//     },
//     {
//         id: 22,
//         match: "normal",
//         date: "TBD",
//         time: "17:00",
//         teamA: getTeamBySlug("superStrikers"),
//         teamB: "TBD",
//         scoreA: 0,
//         scoreB: 0,
//     },

// ];

// export default matches;

import teams from "./teams/index.js"; // imports all teams (chunchun, invincible, etc.)

// A small helper to get team info by slug
const getTeamBySlug = (slug) => teams.find((t) => t.slug === slug);

const matches = [
    // ───────────── 2025-11-10 ─────────────
    {
        id: 1,
        match: "normal",
        date: "2025-11-10",
        time: "17:00",
        teamA: getTeamBySlug("thunderhawks"),
        teamB: getTeamBySlug("superStrikers"),
        scoreA: 1,
        scoreB: 0, // completed
    },
    {
        id: 2,
        match: "normal",
        date: "2025-11-10",
        time: "18:00",
        teamA: getTeamBySlug("chunchunMaru"),
        teamB: getTeamBySlug("zandaGaru"),
        scoreA: 0,
        scoreB: 0, // completed (draw)
    },

    // ───────────── 2025-11-11 ─────────────
    {
        id: 3,
        match: "normal",
        date: "2025-11-11",
        time: "17:00",
        teamA: getTeamBySlug("invincible"),
        teamB: getTeamBySlug("chunchunMaru"),
        scoreA: 0,
        scoreB: 0,
    },
    {
        id: 4,
        match: "normal",
        date: "2025-11-11",
        time: "18:00",
        teamA: getTeamBySlug("zandaGaru"),
        teamB: getTeamBySlug("thunderhawks"),
        scoreA: 0,
        scoreB: 0,
    },

    // ───────────── 2025-11-12 ─────────────
    {
        id: 5,
        match: "normal",
        date: "2025-11-12",
        time: "16:00",
        teamA: getTeamBySlug("superStrikers"),
        teamB: getTeamBySlug("zandaGaru"),
        scoreA: 0,
        scoreB: 0, // completed
    },
    {
        id: 6,
        match: "normal",
        date: "2025-11-12",
        time: "17:00",
        teamA: getTeamBySlug("invincible"),
        teamB: getTeamBySlug("thunderhawks"),
        scoreA: 1,
        scoreB: 1,
    },

    // ───────────── 2025-11-13 ─────────────
    {
        id: 7,
        match: "normal",
        date: "2025-11-13",
        time: "16:00",
        teamA: getTeamBySlug("superStrikers"),
        teamB: getTeamBySlug("chunchunMaru"),
        scoreA: 0,
        scoreB: 0, // completed
    },
    {
        id: 8,
        match: "normal",
        date: "2025-11-13",
        time: "17:00",
        teamA: getTeamBySlug("invincible"),
        teamB: getTeamBySlug("zandaGaru"),
        scoreA: 0,
        scoreB: 0,
    },

    // ───────────── 2025-11-14 ─────────────
    {
        id: 9,
        match: "normal",
        date: "2025-11-14",
        time: "16:00",
        teamA: getTeamBySlug("superStrikers"),
        teamB: getTeamBySlug("invincible"),
        scoreA: 0,
        scoreB: 0,
    },
    {
        id: 10,
        match: "normal",
        date: "2025-11-14",
        time: "17:00",
        teamA: getTeamBySlug("thunderhawks"),
        teamB: getTeamBySlug("chunchunMaru"),
        scoreA: 0,
        scoreB: 0,
    },

    // ───────────── 2025-11-17 ─────────────
    {
        id: 11,
        match: "normal",
        date: "2025-11-17",
        time: "16:00",
        teamA: getTeamBySlug("chunchunMaru"),
        teamB: getTeamBySlug("superStrikers"),
        scoreA: 1,
        scoreB: 0,
    },
    {
        id: 12,
        match: "normal",
        date: "2025-11-17",
        time: "17:00",
        teamA: getTeamBySlug("zandaGaru"),
        teamB: getTeamBySlug("invincible"),
        scoreA: 0,
        scoreB: 0,
    },

    // ───────────── 2025-11-18 ─────────────
    {
        id: 13,
        match: "normal",
        date: "2025-11-18",
        time: "16:00",
        teamA: getTeamBySlug("superStrikers"),
        teamB: getTeamBySlug("zandaGaru"),
        scoreA: 1,
        scoreB: 0,
    },
    {
        id: 14,
        match: "normal",
        date: "2025-11-18",
        time: "17:00",
        teamA: getTeamBySlug("chunchunMaru"),
        teamB: getTeamBySlug("thunderhawks"),
        scoreA: 0,
        scoreB: 0,
    },

    // ───────────── 2025-11-19 ─────────────
    {
        id: 15,
        match: "normal",
        date: "2025-11-19",
        time: "16:00",
        teamA: getTeamBySlug("superStrikers"),
        teamB: getTeamBySlug("thunderhawks"),
        scoreA: 1,
        scoreB: 0,
    },
    {
        id: 16,
        match: "normal",
        date: "2025-11-19",
        time: "17:00",
        teamA: getTeamBySlug("chunchunMaru"),
        teamB: getTeamBySlug("invincible"),
        scoreA: 2,
        scoreB: 0,
    },

    // ───────────── 2025-11-20 ─────────────
    {
        id: 17,
        match: "normal",
        date: "2025-11-20",
        time: "16:00",
        teamA: getTeamBySlug("invincible"),
        teamB: getTeamBySlug("thunderhawks"),
        scoreA: 0,
        scoreB: 0,
    },
    {
        id: 18,
        match: "normal",
        date: "2025-11-20",
        time: "17:00",
        teamA: getTeamBySlug("chunchunMaru"),
        teamB: getTeamBySlug("zandaGaru"),
        scoreA: 0,
        scoreB: 1,
    },

    // ───────────── 2025-11-21 ─────────────
    {
        id: 19,
        match: "normal",
        date: "2025-11-21",
        time: "16:00",
        teamA: getTeamBySlug("zandaGaru"),
        teamB: getTeamBySlug("thunderhawks"),
        scoreA: 0,
        scoreB: 0,
    },
    {
        id: 20,
        match: "normal",
        date: "2025-11-21",
        time: "17:00",
        teamA: getTeamBySlug("superStrikers"),
        teamB: getTeamBySlug("invincible"),
        scoreA: 2,
        scoreB: 0,
    },

    // ───────────── Knockout: Play Off ─────────────
    {
        id: 21,
        match: "Play Off",
        date: "2025-11-25",
        time: "15:00",
        teamA: getTeamBySlug("chunchunMaru"),
        teamB: getTeamBySlug("thunderhawks"),
        scoreA: null, // not played yet
        scoreB: null, // not played yet
    },

    // ───────────── Knockout: normal ─────────────
    {
        id: 22,
        match: "Final",
        date: "TBD",
        time: "15:00",
        teamA: getTeamBySlug("superStrikers"),
        teamB: "TBD", // winner of Play Off; your helpers can handle string
        scoreA: null, // not played yet
        scoreB: null, // not played yet
    },
];

export default matches;
