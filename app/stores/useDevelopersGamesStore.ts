import type { DeveloperWithGamesCount } from "../types/developers";
import { usePaginatedFetch } from "../composables/usePaginatedFetch";

export const useDevelopersGamesStore = defineStore("developers-games", () => {
  const {
    items: developers,
    links,
    fetchPage: fetchDevelopers,
  } = usePaginatedFetch<DeveloperWithGamesCount>("stats/developers/by-games", "developers");

  return { developers, links, fetchDevelopers }
});
