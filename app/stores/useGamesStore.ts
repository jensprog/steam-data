/* Pinia store for paginated games data, wraps usePaginatedFetch for the games endpoint. */
import type { Game } from "../types/games";
import { usePaginatedFetch } from "../composables/usePaginatedFetch";

export const useGamesStore = defineStore("games", () => {
    const { items: games, links, error, fetchPage: fetchGames } = usePaginatedFetch<Game>("games", "games");

    return { games, links, error, fetchGames };
});
