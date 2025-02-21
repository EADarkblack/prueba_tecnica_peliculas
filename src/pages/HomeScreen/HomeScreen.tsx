import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { skipToken } from "@reduxjs/toolkit/query";

// Components
import NavbarComponent from "components/NavbarComponent/NavbarComponent";
import HomeBodyComponent from "components/HomeBodyComponent/HomeBodyComponent";
import ScrollTopButtonComponent from "components/ScrollTopButtonComponent/ScrollTopButtonComponent";

// Queries
import {
  useGetPopularMovieQuery,
  useGetMovieByFilterQuery,
  useGetMovieByQueryQuery,
} from "services/movieApi";

// Slices
import {
  setMovieList,
  addMovies,
  setPage,
} from "../../store/slices/movieSlice";

// Hooks
import useDebounce from "hooks/useDebounce";

const HomeScreen = (props: {}) => {
  const dispatch = useDispatch();

  const filterData = useSelector((state: any) => state.filter);
  const page = useSelector((state: any) => state.movie.page);
  const queryData = useSelector((state: any) => state.search);

  // Debounce para evitar búsquedas innecesarias
  const debouncedQuery = useDebounce(queryData?.query, 500);

  // Memoiza los datos del filtro
  const isFiltering = useMemo(
    () => filterData.genre || filterData.year || filterData.rating,
    [filterData]
  );

  const isSearching = useMemo(
    () => debouncedQuery.trim() !== "",
    [debouncedQuery]
  );

  // Memoiza los parámetros de la búsqueda
  const queryParams = useMemo(() => {
    if (isSearching) return { query: debouncedQuery, page };
    if (isFiltering) return { ...filterData, page };
    return skipToken;
  }, [isSearching, isFiltering, debouncedQuery, page, filterData]);

  // condicional para definir el paginado
  const shouldPaginate = useMemo(
    () => isFiltering || isSearching,
    [isFiltering, isSearching]
  );

  //Peticiones
  const { data: getMovies, refetch } = useGetPopularMovieQuery(1);
  const { data: movieByFilter } = useGetMovieByFilterQuery(
    isSearching ? skipToken : queryParams
  );
  const { data: movieByQuery } = useGetMovieByQueryQuery(
    isSearching ? queryParams : skipToken
  );

  // Calcula el total de páginas
  const totalPages = useMemo(
    () =>
      movieByFilter?.total_pages ||
      movieByQuery?.total_pages ||
      getMovies?.total_pages ||
      1,
    [movieByFilter, movieByQuery, getMovies]
  );

  // Verifica si hay más datos para paginar
  const hasMoreData = useMemo(() => page < totalPages, [page, totalPages]);

  // Reinicializa la lista de películas al cambiar filtros o búsqueda
  useEffect(() => {
    dispatch(setMovieList([]));
    dispatch(setPage(1));

    if (!shouldPaginate) {
      refetch();
    }
  }, [shouldPaginate, filterData, debouncedQuery, refetch, dispatch]);

  // Agrega las películas populares
  useEffect(() => {
    if (!shouldPaginate && getMovies) {
      dispatch(addMovies(getMovies.results));
    }
  }, [getMovies, shouldPaginate, dispatch]);

  // Agrega las películas filtradas
  useEffect(() => {
    if (movieByFilter) {
      dispatch(addMovies(movieByFilter.results));
    }
  }, [movieByFilter, dispatch]);

  // Agrega las películas buscadas
  useEffect(() => {
    if (movieByQuery) {
      dispatch(addMovies(movieByQuery.results));
    }
  }, [movieByQuery, dispatch]);

  // Memoiza la función de paginación y genera el scroll infinito con su respectiva paginacion.
  const handleScroll = useCallback(() => {
    if (!shouldPaginate || !hasMoreData) return;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      dispatch(setPage(page + 1));
    }
  }, [dispatch, page, shouldPaginate, hasMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <NavbarComponent />
      <HomeBodyComponent />
      <ScrollTopButtonComponent {...props} />
    </>
  );
};

export default HomeScreen;
