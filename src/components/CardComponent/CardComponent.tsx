import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";

//Style
import "./CardComponent.css";

const CardComponent = () => {
  const history = useNavigate();

  //Dependiendo del valor de la calificacion, devuelve el color que le corresponde
  const getRatingColor = (rating: number) => {
    if (rating >= 7) return "green";
    if (rating >= 5) return "yellow";
    return "red";
  };

  const ratingRaw = (Math.random() * 9 + 1).toFixed(1);

  //Convierte el valor a un tipo numero
  const rating = +ratingRaw;

  //Valida si el numero es de entero o decimal, si es entero lo redondea
  const formattedRating = Number.isInteger(rating)
    ? rating.toFixed(0)
    : ratingRaw;

  const handleRedirect = () => {
    history("/detalle-pelicula");
  };

  return (
    <Card className="card-container" onClick={handleRedirect}>
      <CardActionArea className="card-subcontainer">
        <img
          className="card-img"
          src="https://picsum.photos/200"
          alt="movie thumbnail"
        />
        <CardContent className="card-content-container">
          <Typography variant="body1" component="div">
            Hola mundo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Año de lanzamiento: 1969
          </Typography>
          <div
            className={`card-rating-container ${getRatingColor(
              Number(rating)
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
