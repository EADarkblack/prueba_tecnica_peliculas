import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";

//Style
import "./CardComponent.css";

//Types
type CardComponentProps = {
  cardData: {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: number;
  };
};

const CardComponent: React.FC<CardComponentProps> = ({ cardData }) => {
  const history = useNavigate();

  //Dependiendo del valor de la calificacion, devuelve el color que le corresponde
  const getRatingColor = (rating: number) => {
    if (rating >= 7) return "green";
    if (rating >= 5) return "yellow";
    return "red";
  };

  //Valida si el numero es de entero o decimal, si es entero lo redondea
  const formattedRating = Number.isInteger(cardData?.vote_average)
    ? cardData?.vote_average.toFixed(0)
    : cardData?.vote_average.toFixed(1);

  const handleRedirect = (id: number) => {
    history(`/detalle-pelicula/${id}`);
  };

  return (
    <Card
      className="card-container"
      onClick={() => handleRedirect(cardData?.id)}
    >
      <CardActionArea className="card-subcontainer">
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/w200${cardData?.poster_path}`}
          alt={cardData?.title}
        />
        <CardContent className="card-content-container">
          <Typography variant="body1" component="div">
            {cardData?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Año de lanzamiento: {cardData?.release_date.split("-")[0]}
          </Typography>
          <div
            className={`card-rating-container ${getRatingColor(
              cardData?.vote_average
            )}`}
          >
            <Typography
              className="card-rating-number"
              variant="body1"
              color="text.secondary"
            >
              {formattedRating}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
