export const useApi = <T>(endpoint: string) => {
  const data = ref<T[]>([]);

  const fetchData = async () => {
    try {
      const response = (await $fetch(`/api/${endpoint}`)) as Record<string, T[]>;
      data.value = response[endpoint] ?? [];
    } catch (error) {
      console.error(error);
    }
  };
  return { data, fetchData };
};
