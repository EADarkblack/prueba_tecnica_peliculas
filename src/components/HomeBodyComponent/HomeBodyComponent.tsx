import { Box, Typography } from "@mui/material";

//Styles
import "./HomeBodyComponent.css";

//Components
import FilterSearchComponent from "components/FilterSearchComponent/FilterSearchComponent";
import CardGridComponent from "components/CardGridComponent/CardGridComponent";

const HomeBodyComponent = () => {
  return (
    <Box
      className="home-body-container"
      sx={{
        mt: "5%",
      }}
    >
      <Typography variant="h2" className="home-body-title">
        Curso React Redux
      </Typography>
      <FilterSearchComponent />
      <CardGridComponent />
    </Box>
  );
};

export default HomeBodyComponent;
