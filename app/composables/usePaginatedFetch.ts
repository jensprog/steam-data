/* Composable that fetches the paginated data from the API and stores it in a reference.
 * It also stores the pagination links in a reference. */
import type { PaginatedResponse } from "../types/paginatedResponse";
import { useApiUrl } from "./useApiUrl";

export function usePaginatedFetch<T>(endpoint: string, responseKey: string) {
    const items = ref<T[]>([]);
    const links = ref<{ self?: string; next?: string; previous?: string }>({});

    async function fetchPage(page = 1, limit = 20) {
        const response = (await $fetch(useApiUrl(`${endpoint}?page=${page}&limit=${limit}`))) as PaginatedResponse<T>;
        items.value = response[responseKey] as T[];
        links.value = response.links;
    }

    return { items, links, fetchPage };
}
