export const useApiUrl = (path: string, query?: Record<string, string>) => {
    const {
        public: { apiBaseUrl },
    } = useRuntimeConfig();
    const queryString = query ? new URLSearchParams(query).toString() : "";
    return queryString ? `${apiBaseUrl}/${path}?${queryString}` : `${apiBaseUrl}/${path}`;
};
