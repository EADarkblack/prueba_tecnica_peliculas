import { useParams } from "react-router";

//Components
import MovieInfoBodyComponent from "components/MovieInfoBodyComponent/MovieInfoBodyComponent";
import NavbarComponent from "components/NavbarComponent/NavbarComponent";

//Queries
import { useGetMovieByIdQuery } from "services/movieApi";

const MovieInfoScreen = () => {
  const { id } = useParams();

  //Obtiene la informacion de la pelicula buscandola por su id
  const { data } = useGetMovieByIdQuery(id);

  return (
    <>
      <NavbarComponent />
      <MovieInfoBodyComponent movieData={data} />
    </>
  );
};

export default MovieInfoScreen;
