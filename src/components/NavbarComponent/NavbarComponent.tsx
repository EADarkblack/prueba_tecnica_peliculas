import { useEffect } from "react";
import { AppBar, Box, Button, Switch, Toolbar } from "@mui/material";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";

//Styles
import "./NavbarComponent.css";

//Slices
import { setDark } from "store/slices/darkModeSlice";
import { login, logout } from "store/slices/authSlice";

const NavbarComponent = () => {
  const dispatch = useDispatch();

  const isDark = useSelector((state: any) => state.darkMode?.isDark);

  const user = useSelector((state: any) => state.auth.user);

  //Cambia el color de fondo del body del HTML
  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "#262626";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }

    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  //Cambia el estado del switch y setea el nuevo estado en el localstorage para persistir los datos
  const handleToggle = () => {
    dispatch(setDark(!isDark));
  };

  const handleLogin = () => {
    dispatch(logout());
  };

  const handleLogout = () => {
    dispatch(login());
  };

  return (
    <AppBar
      position="static"
      className={`navbar-container ${isDark ? "dark" : ""}`}
    >
      <Toolbar id="back-to-top-anchor" className="navbar-subcontainer">
        <Box className="logo-container">
          <Link to="/">
            <img className="logo" src="/assets/logo.png" alt="logo image" />
          </Link>
        </Box>
        <Box>
          <Switch color="default" checked={isDark} onChange={handleToggle} />
          {user ? (
            <Button color="inherit" onClick={handleLogin}>
              Cerrar sesión
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Ingresar como Invitado
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
