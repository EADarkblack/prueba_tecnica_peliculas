import { Grid2 } from "@mui/material";

//Styles
import "./CardGridComponent.css";

//Components
import CardComponent from "components/CardComponent/CardComponent";

const CardGridComponent = () => {
  return (
    <Grid2
      className="card-grid-container"
      sx={{
        mt: 10,
        mb: 10,
      }}
      container
      spacing={2}
      size={{ xs: 2, sm: 4, md: 4 }}
    >
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Grid2>
  );
};

export default CardGridComponent;
