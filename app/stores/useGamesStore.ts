import type { Game } from "../types/games";
import { usePaginatedFetch } from "../composables/usePaginatedFetch";

export const useGamesStore = defineStore("games", () => {
  const { items: games, links, fetchPage: fetchGames } = usePaginatedFetch<Game>("games", "games");

  return { games, links, fetchGames };
});
