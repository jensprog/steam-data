import type { Genre } from "../types/genres";

export const useGenresStore = defineStore("genres", () => {
  const genres = ref<Genre[]>([]);
  const links = ref<{ self?: string; next?: string; previous?: string }>({});

  async function fetchGenres(page = 1, limit = 20) {
    const response = (await $fetch(`/api/genres?page=${page}&limit=${limit}`)) as {
      genres: Genre[];
      links: { self?: string; next?: string; previous?: string };
    };
    genres.value = response.genres;
    links.value = response.links;
  }

  return { genres, links, fetchGenres };
});
