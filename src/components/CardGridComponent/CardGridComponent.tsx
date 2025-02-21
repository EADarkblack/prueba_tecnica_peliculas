import { Grid2 } from "@mui/material";

//Styles
import "./CardGridComponent.css";

//Components
import CardComponent from "components/CardComponent/CardComponent";

//Types
type CardGridComponentProps = {
  data: {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: number;
  }[];
};

const CardGridComponent: React.FC<CardGridComponentProps> = ({ data }) => {
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
      {data?.map(
        (
          item: {
            id: number;
            poster_path: string;
            title: string;
            release_date: string;
            vote_average: number;
          },
          index: number
        ) => (
          <CardComponent key={index} cardData={item} />
        )
      )}
    </Grid2>
  );
};

export default CardGridComponent;
