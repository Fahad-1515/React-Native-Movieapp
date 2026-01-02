import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getPopularMovies, searchMovies } from '../api/tmdbApi';

export interface Movie {
  id: number;
  title: string;
  overview: string;
}

export interface MoviesState {
  list: Movie[];
  page: number;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  bookmarks: Movie[];
}

const initialState: MoviesState = {
  list: [],
  page: 1,
  loading: false,
  error: null,
  searchQuery: '',
  bookmarks: [],
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (page: number) => {
    const res = await getPopularMovies(page);
    return res.results as Movie[];
  },
);

export const fetchSearchMovies = createAsyncThunk(
  'movies/fetchSearchMovies',
  async ({ query, page }: { query: string; page: number }) => {
    const res = await searchMovies(query, page);
    return res.results as Movie[];
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.page = 1;
      state.list = [];
    },
    addBookmark(state, action: PayloadAction<Movie>) {
      if (!state.bookmarks.find(m => m.id === action.payload.id)) {
        state.bookmarks.push(action.payload);
      }
    },
    removeBookmark(state, action: PayloadAction<number>) {
      state.bookmarks = state.bookmarks.filter(m => m.id !== action.payload);
    },
    restoreState(_, action: PayloadAction<MoviesState>) {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(...action.payload);
        state.page += 1;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(...action.payload);
        state.page += 1;
      });
  },
});

export const { setSearchQuery, addBookmark, removeBookmark, restoreState } =
  moviesSlice.actions;

export default moviesSlice.reducer;
