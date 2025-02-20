import { Box, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

//Styles
import "./MovieInfoBodyComponent.css";

//Components
import TagComponent from "components/TagComponent/TagComponent";

const MovieInfoBodyComponent = () => {
  return (
    <Box
      className="movie-info-body-container"
      sx={{
        px: 2,
        mt: "5%",
      }}
    >
      <Box className="movie-info-body-subcontainer">
        <Box className="movie-info-title-container">
          <Typography variant="h4" className="movie-info-title">
            Título de la Película
          </Typography>
          <IconButton
            className="movie-info-favorite-button-container"
            aria-label="add to favorites"
          >
            <FavoriteBorderIcon fontSize="large" />
          </IconButton>
        </Box>

        <Box
          className="movie-info-details-container"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box>
            <img
              src="https://picsum.photos/300/450"
              alt="movie poster"
              className="movie-info-img"
            />
          </Box>
          <Box className="movie-info-description-container">
            <Typography variant="body1">
              <strong className="movie-info-title">
                Fecha de lanzamiento:
              </strong>{" "}
              12 de diciembre de 2023
            </Typography>
            <Typography variant="body1">
              <strong className="movie-info-title">Duración:</strong> 2h 15m
            </Typography>
            <Typography variant="body1">
              <strong className="movie-info-title">Calificación:</strong> 8.5 /
              10
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong className="movie-info-title">Sinopsis:</strong>
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
              Drama histórico de terror psicológico ambientado en la sangrienta
              corte de la dinastía Tudor, basado en la novela histórica The
              Queen’s Gambit de Elizabeth Fremantle. Catalina Parr (Alicia
              Vikander) es la reina consorte de Inglaterra e Irlanda, además de
              la sexta y última esposa de Enrique VIII (Jude Law), un rey
              conocido por la crueldad con que trataba a sus esposas. Desde el
              punto de vista de Catalina y su joven doncella, conoceremos la
              historia y vivencias de dos mujeres muy diferentes, en una época
              aterradora y turbulenta. Catalina Parr, personaje poco conocido de
              la historia de Inglaterra, sería la única esposa de Enrique VIII
              que iba a evitar el destierro o la muerte.
            </Typography>

            <TagComponent title="Categorías:" />
            <TagComponent title="Reparto Principal:" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieInfoBodyComponent;
