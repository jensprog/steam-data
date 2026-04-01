import type { Genre } from "../types/genres";

export const useGenresStore = defineStore("genres", () => {
  const genres = ref<Genre[]>([]);
  const loaded = ref(false);

  async function fetchGenres() {
    if (loaded.value) return;

    const response = (await $fetch("/api/genres")) as { genres: Genre[] };
    genres.value = response.genres;
    loaded.value = true;
  }

  return { genres, loaded, fetchGenres };
});
