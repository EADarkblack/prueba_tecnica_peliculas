import { Box, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";

//Styles
import "./MovieInfoBodyComponent.css";

//Components
import TagComponent from "components/TagComponent/TagComponent";

//Slices
import { addFavorite } from "store/slices/favoriteSlice";

//Types
type MovieInfoBodyComponentProps = {
  movieData: {
    id: number;
    title: string;
    release_date: string;
    runtime: number;
    vote_average: number;
    overview: string;
    poster_path: string;
    genres: {
      name: string;
    }[];
    credits: {
      cast: {
        name: string;
      }[];
    };
  };
};

const MovieInfoBodyComponent: React.FC<MovieInfoBodyComponentProps> = ({
  movieData,
}) => {
  const dispatch = useDispatch();

  const isDark = useSelector((state: any) => state.darkMode?.isDark);

  const favorite = useSelector(
    (state: any) => state.favoriteMovie?.favMovieList
  );

  const auth = useSelector((state: any) => state.auth?.user);

  const isFavorite = favorite.includes(movieData?.id);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  //Formate la fecha para dar el formato de DD de mes del AAAA
  const splittedDate = movieData?.release_date?.split("-");

  const formattedDate = `${splittedDate?.[2]} de ${
    months[parseInt(splittedDate?.[1], 10) - 1]
  } del ${splittedDate?.[0]}`;

  //Formate la duracion para dar el formato de HH:MM - resultado ejemplo: 2h 30m
  const formatRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const formattedRuntime = formatRuntime(movieData?.runtime);

  //Formate la calificacion para dar el formato de 7.5 - resultado ejemplo: 7.5 o 7 si es entero
  const formattedRating = Number.isInteger(movieData?.vote_average)
    ? movieData?.vote_average.toFixed(0)
    : movieData?.vote_average.toFixed(1);

  //Obtiene los primeros 10 actores principales
  const mainActors = movieData?.credits?.cast?.slice(0, 10);

  //Agrega o elimina la pelicula del arreglo de favoritos en redux y en el localstorage
  const handleToggleFavorite = () => {
    dispatch(addFavorite(movieData?.id));
  };

  return (
    <Box
      className={`movie-info-body-container ${
        isDark ? "movie-info-body-container-dark" : ""
      }`}
      sx={{
        px: 2,
        pt: "5%",
      }}
    >
      <Box className="movie-info-body-subcontainer">
        <Box className="movie-info-title-container">
          <Typography variant="h4" className="movie-info-title">
            {movieData?.title}
          </Typography>
          <IconButton
            onClick={handleToggleFavorite}
            className="movie-info-favorite-button-container"
            aria-label="add to favorites"
          >
            {auth &&
              (isFavorite ? (
                <FavoriteIcon color="error" fontSize="large" />
              ) : (
                <FavoriteBorderIcon fontSize="large" />
              ))}
          </IconButton>
        </Box>

        <Box
          className="movie-info-details-container"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieData?.poster_path}`}
              alt={movieData?.title}
              className="movie-info-img"
            />
          </Box>
          <Box className="movie-info-description-container">
            <Typography variant="body1">
              <strong className="movie-info-title">
                Fecha de lanzamiento:
              </strong>{" "}
              {formattedDate}
            </Typography>
            <Typography variant="body1">
              <strong className="movie-info-title">Duración:</strong>{" "}
              {formattedRuntime}
            </Typography>
            <Typography variant="body1">
              <strong className="movie-info-title">Calificación:</strong>{" "}
              {formattedRating} / 10
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong className="movie-info-title">Sinopsis:</strong>
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
              {movieData?.overview}
            </Typography>

            <TagComponent
              title="Categorías:"
              data={movieData?.genres?.map((genre) => ({ name: genre?.name }))}
            />
            <TagComponent
              title="Reparto Principal:"
              data={mainActors?.map((actor) => ({ name: actor?.name }))}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieInfoBodyComponent;
