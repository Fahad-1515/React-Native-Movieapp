const API_KEY = '3740e5bc95a3677c8735e17895d834c0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (page: number) => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
  );

  if (!res.ok) throw new Error('Failed to fetch popular movies');
  return res.json();
};

export const getTrendingMovies = async (page: number) => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );

  if (!res.ok) throw new Error('Failed to fetch trending movies');
  return res.json();
};

export const searchMovies = async (query: string, page: number) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query,
    )}&page=${page}`,
  );

  if (!res.ok) throw new Error('Failed to search movies');
  return res.json();
};
