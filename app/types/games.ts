export interface Game {
  id: number;
  name: string;
  price: number;
  release_date: string | null;
  metacritic_score: number;
  positive: number;
  negative: number;
  windows: boolean;
  mac: boolean;
  linux: boolean;
  average_playtime_forever: number;
  estimated_owners: string | null;
  header_image: string | null;
  developers: string[];
  genres: string[];
  links: Record<string, string>[];
}

