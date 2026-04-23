/**
 * Returns a full API URL for the given path and optional query parameters.
 * Uses the internal base URL on the server (SSR) and the public base URL on the client.
 */

export const useApiUrl = (path: string, query?: Record<string, string>) => {
    const config = useRuntimeConfig();
    const baseUrl = import.meta.server ? config.apiBaseUrl : config.public.apiBaseUrl;
    const queryString = query ? new URLSearchParams(query).toString() : "";
    return queryString ? `${baseUrl}/${path}?${queryString}` : `${baseUrl}/${path}`;
};
