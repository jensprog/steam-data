export const useApiDetails = <T>(endpoint: string, id: string | number) => {
  const data = ref<T | null>(null);

  const fetchData = async () => {
    try {
      const response = (await $fetch(`/api/${endpoint}/${id}`)) as T;
      data.value = response;
    } catch (error) {
      console.error(error);
    }
  };
  return { data, fetchData };
};
