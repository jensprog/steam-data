/**
 * Composable for fetching a single resource by endpoint and ID.
 * Returns reactive `data` and a `fetchData` function.
 * On failure, re-throws the error as a Nuxt error with statusCode and statusMessage.
 */
import { useApiUrl } from "./useApiUrl";

export const useApiDetails = <T>(endpoint: string, id: string | number) => {
    const data = ref<T | null>(null);

    const fetchData = async () => {
        try {
            const response = (await $fetch(useApiUrl(`${endpoint}/${id}`))) as T;
            data.value = response;
        } catch (error) {
            console.error(error);
            const err = error as { statusCode: number; statusMessage: string };
            throw createError({ status: err.statusCode, statusMessage: err.statusMessage });
        }
    };
    return { data, fetchData };
};
