import type { Game } from "../types/games";

export const useGamesStore = defineStore("games", () => {
  const games = ref<Game[]>([]);
  const links = ref<{ self?: string; next?: string; previous?: string }>({});

  async function fetchGames(page = 1, limit = 20) {
    const response = (await $fetch(`/api/games?page=${page}&limit=${limit}`)) as {
      games: Game[];
      links: { self?: string; next?: string; previous?: string };
    };
    games.value = response.games;
    links.value = response.links;
  }

  return { games, links, fetchGames };
});
