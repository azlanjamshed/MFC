
export function computeFromTeams(teams = [], options = { winPoints: 2, drawPoints: 1 }) {
    const { winPoints = 2, drawPoints = 1 } = options;

    const computed = teams.map((t) => {
        const won = Number(t.won || 0);
        const lost = Number(t.lost || 0);
        const draw = Number(t.draw || 0);
        const played = won + lost + draw;
        const pts = won * winPoints + draw * drawPoints;

        return {
            ...t,
            played,
            won,
            lost,
            draw,
            pts,
        };
    });

    // sort by pts desc, won desc, name asc
    computed.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.won !== a.won) return b.won - a.won;
        return a.name.localeCompare(b.name);
    });

    // add position (1-based)
    return computed.map((row, idx) => ({ ...row, pos: idx + 1 }));
}

export default computeFromTeams;
