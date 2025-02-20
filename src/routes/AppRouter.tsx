import { BrowserRouter, Navigate, Route, Routes } from "react-router";

//Components
import HomeScreen from "pages/HomeScreen/HomeScreen";
import MovieInfoScreen from "pages/MovieInfoScreen/MovieInfoScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/detalle-pelicula" element={<MovieInfoScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
