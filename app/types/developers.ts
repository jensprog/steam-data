export interface Developer {
  id: number;
  name: string;
  links: Record<string, string>[];
}

export interface DeveloperWithGamesCount {
  name: string;
  game_count: number;
}
