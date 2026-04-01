import type { Game } from "~/types/games";

export const useGamesStore = defineStore("games", () => {
  const games = ref<Game[]>([]);
  const loaded = ref(false);

  async function fetchGames() {
    if (loaded.value) return;

    const response = (await $fetch("/api/games")) as { games: Game[] };
    games.value = response.games;
    loaded.value = true;
  }

  return { games, loaded, fetchGames };
});
