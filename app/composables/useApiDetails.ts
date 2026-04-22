import { useApiUrl } from "./useApiUrl";

export const useApiDetails = <T>(endpoint: string, id: string | number) => {
    const data = ref<T | null>(null);

    const fetchData = async () => {
        try {
            const response = (await $fetch(useApiUrl(`${endpoint}/${id}`))) as T;
            data.value = response;
        } catch (error) {
            const err = error as { status: number; statusMessage: string };
            throw createError({ status: err.status, statusMessage: err.statusMessage })
        }
    };
    return { data, fetchData };
};
