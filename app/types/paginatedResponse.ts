export interface PaginatedResponse<T> {
  [key: string]: T[] | { self?: string; next?: string; previous?: string };
  links: {
    self?: string;
    next?: string;
    previous?: string;
  };
}
