export const useGames = () => {
  const games = ref([]);
  const fetchGames = async () => {
    try {
      const response = await $fetch("/api/games") as { games: typeof games.value };
      games.value = response.games;
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };
  return { games, fetchGames };
};
