import type { Developer } from "../types/developers";
import { usePaginatedFetch } from "../composables/usePaginatedFetch";

export const useDevelopersStore = defineStore("developers", () => {
  const {
    items: developers,
    links,
    fetchPage: fetchDevelopers,
  } = usePaginatedFetch<Developer>("developers", "developers");

  return { developers, links, fetchDevelopers };
});
