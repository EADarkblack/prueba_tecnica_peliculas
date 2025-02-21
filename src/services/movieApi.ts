import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Constants
import { API_KEY, API_URL } from "constants/constants";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (builder) => ({
    getPopularMovie: builder.query({
      query: () => `movie/popular?api_key=${API_KEY}&language=es-ES&page=1`,
    }),
    getMovieByQuery: builder.query({
      query: ({ page = 1, query }) =>
        `search/movie?api_key=${API_KEY}&query=${query}&language=es-ES&page=${page}`,
    }),
    getMovieByFilter: builder.query({
      query: ({ page = 1, genre, year, rating }) => {
        let url = `discover/movie?api_key=${API_KEY}&language=es-ES&page=${page}`;

        if (genre) url += `&with_genres=${genre?.id}`;
        if (year) url += `&primary_release_year=${year?.value}`;
        if (rating) url += `&vote_average.gte=${rating?.value}`;

        return url;
      },
    }),
    getGenresList: builder.query({
      query: () => `genre/movie/list?api_key=${API_KEY}&language=es-ES`,
    }),
    getMovieById: builder.query({
      query: (id) =>
        `movie/${id}?api_key=${API_KEY}&language=es-ES&append_to_response=credits`,
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  useGetMovieByQueryQuery,
  useGetMovieByFilterQuery,
  useGetGenresListQuery,
  useGetMovieByIdQuery,
} = movieApi;
