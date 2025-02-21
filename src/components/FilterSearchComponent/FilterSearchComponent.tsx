import {
  Autocomplete,
  Box,
  TextField,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

//Styles
import "./FilterSearchComponent.css";

//Slices
import { setGenre, setYear, setRating } from "../../store/slices/filterSlice";
import { setQuery } from "../../store/slices/searchSlice";

//Queries
import { useGetGenresListQuery } from "services/movieApi";

const FilterSearchComponent = () => {
  const dispatch = useDispatch();

  const filterData = useSelector((state: any) => state.filter);

  const queryData = useSelector((state: any) => state.search);

  const isDark = useSelector((state: any) => state.darkMode?.isDark);

  const { data } = useGetGenresListQuery({});

  //Genera el listado de años desde 1887 hasta el año actual
  const currentYear = new Date().getFullYear();

  const years = [
    ...Array.from({ length: currentYear - 1887 + 1 }, (_, i) => ({
      label: String(currentYear - i),
      value: currentYear - i,
    })),
  ];

  //Listado de generos traidos de la api
  const genres = data?.genres;

  //Listado de las calificaciones para filtrar
  const ratings = [
    { label: "0+", value: 0 },
    { label: "1+", value: 1 },
    { label: "2+", value: 2 },
    { label: "3+", value: 3 },
    { label: "4+", value: 4 },
    { label: "5+", value: 5 },
    { label: "6+", value: 6 },
    { label: "7+", value: 7 },
    { label: "8+", value: 8 },
    { label: "9+", value: 9 },
    { label: "10", value: 10 },
  ];

  //Valida el tamaño de la pantalla
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //Setea el valor de la query, limpiando los filtros
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));

    dispatch(setGenre(null));
    dispatch(setYear(null));
    dispatch(setRating(null));
  };

  //Setea los datos de los filtros, limpiando la busqueda en la barra de busqueda
  const handleFilterChange = (type: string, newValue: any) => {
    if (type === "genre") dispatch(setGenre(newValue));
    if (type === "rating") dispatch(setRating(newValue));
    if (type === "year") dispatch(setYear(newValue));

    dispatch(setQuery(""));
  };

  return (
    <Box className="filter-search-container">
      <Box
        className="search-container"
        sx={{
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <TextField
          className={isDark ? "search-input-dark" : ""}
          onChange={handleSearchChange}
          fullWidth
          variant="outlined"
          size="small"
          value={queryData?.query}
          label="Buscar"
        />
      </Box>

      <ToggleButtonGroup
        exclusive
        aria-label="Filtros"
        className="filter-container"
        sx={{
          mt: 2,
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Autocomplete
          disablePortal
          options={genres}
          className={isDark ? "filter-input-dark" : ""}
          sx={{ width: "100%" }}
          getOptionLabel={(option) =>
            option?.name ? String(option?.name) : "Selecciona"
          }
          onChange={(_, newValue) => handleFilterChange("genre", newValue)}
          value={filterData?.genre}
          size="small"
          renderInput={(params) => <TextField {...params} label="Género" />}
        />
        <Autocomplete
          disablePortal
          options={ratings}
          className={isDark ? "filter-input-dark" : ""}
          sx={{ width: "100%" }}
          getOptionLabel={(option) =>
            option?.label ? String(option.label) : "Selecciona"
          }
          onChange={(_, newValue) => handleFilterChange("rating", newValue)}
          value={filterData?.rating || ""}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Calificación" />
          )}
        />
        <Autocomplete
          disablePortal
          options={years}
          className={isDark ? "filter-input-dark" : ""}
          sx={{ width: "100%" }}
          getOptionLabel={(option) =>
            option?.label ? String(option.label) : "Selecciona"
          }
          onChange={(_, newValue) => handleFilterChange("year", newValue)}
          value={filterData?.year || ""}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Año de lanzamiento" />
          )}
        />
      </ToggleButtonGroup>
    </Box>
  );
};

export default FilterSearchComponent;
