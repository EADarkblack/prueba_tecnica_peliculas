import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router";

//Styles
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <AppBar position="static" className="navbar-container">
      <Toolbar id="back-to-top-anchor">
        <Box className="logo-container">
          <Link to="/">
            <img
              className="logo"
              src="https://picsum.photos/200"
              alt="logo image"
            />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
