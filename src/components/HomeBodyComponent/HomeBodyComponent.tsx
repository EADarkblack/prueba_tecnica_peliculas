import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

//Styles
import "./HomeBodyComponent.css";

//Components
import FilterSearchComponent from "components/FilterSearchComponent/FilterSearchComponent";
import CardGridComponent from "components/CardGridComponent/CardGridComponent";

//Types
type state = {
  movie: {
    movieList: [];
  };
};

const HomeBodyComponent = () => {
  const listMovies = useSelector((state: state) => state.movie.movieList);

  const isDark = useSelector((state: any) => state.darkMode?.isDark);

  return (
    <Box
      className={`home-body-container ${
        isDark ? "home-body-container-dark" : ""
      }`}
      sx={{
        pt: "5%",
      }}
    >
      <Typography
        variant="h2"
        className={`home-body-title ${isDark ? "home-body-title-dark" : ""}`}
      >
        WIKICINE
      </Typography>
      <FilterSearchComponent />
      <CardGridComponent data={listMovies} />
    </Box>
  );
};

export default HomeBodyComponent;
