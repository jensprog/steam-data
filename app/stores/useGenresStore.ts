/* Pinia store for paginated genres data, wraps usePaginatedFetch for the genres endpoint. */
import type { Genre } from "../types/genres";
import { usePaginatedFetch } from "../composables/usePaginatedFetch";

export const useGenresStore = defineStore("genres", () => {
    const { items: genres, links, fetchPage: fetchGenres } = usePaginatedFetch<Genre>("genres", "genres");

    return { genres, links, fetchGenres };
});
