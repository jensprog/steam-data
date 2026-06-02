import type { RankingEntry } from "../types/ranking";
import { usePaginatedFetch } from "../composables/usePaginatedFetch";

export const useRankingsStore = defineStore("ranking", () => {
    const {
        items: rankings,
        links,
        error,
        fetchPage: fetchRankings,
    } = usePaginatedFetch<RankingEntry>("stats/games/all-concurrent-players", "rankings");
    return { rankings, links, error, fetchRankings };
});
