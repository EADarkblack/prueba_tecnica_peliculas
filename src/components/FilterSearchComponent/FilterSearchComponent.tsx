import {
  Autocomplete,
  Box,
  Button,
  TextField,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const FilterSearchComponent = () => {
  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Pulp Fiction", id: 2 },
  ];

  //Valida el tamaño de la pantalla
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleGetFilter = (e: any) => {
    console.log(e);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        width: "90%",
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: 1,
          width: "100%",
        }}
      >
        <TextField fullWidth variant="outlined" size="small" />
        <Button variant="contained" color="primary">
          Buscar
        </Button>
      </Box>

      <ToggleButtonGroup
        exclusive
        onChange={handleGetFilter}
        aria-label="Filtros"
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: 1,
          width: "100%",
        }}
      >
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: "100%" }}
          size="small"
          renderInput={(params) => <TextField {...params} label="Género" />}
        />
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: "100%" }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Calificación" />
          )}
        />
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: "100%" }}
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
