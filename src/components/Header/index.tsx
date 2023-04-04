import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Menu,
  MenuButton,
} from "@chakra-ui/react";

// context
import AuthContext from "../../store/auth-context";

// consts
import { PATH } from "../../consts";

const HeaderComponent: React.FC = (props) => {
  const authContext = useContext(AuthContext);

  const logout = () => {
    authContext.logout();
  }

  return (
    <Box background="white" display={"table-row"}>
      <header>
        <Box className="container">
          <Box className="top-group">
            <Box className="logo-box">
              <Link to={""} className="logo">Meranda</Link>
            </Box>
            <Box className="right-box">
              {!authContext.isLoggedIn ? (<Link to={PATH.LOGIN}>Login</Link>) : (<Button size="sm" onClick={logout}>Logout</Button>)}
            </Box>
          </Box>

          <Box className="menu-group">
            <Menu>
              <Link to={PATH.HOME}>
                <MenuButton>Home</MenuButton>
              </Link>

              <Link to={PATH.CATEGORIES}>
                <MenuButton>Categories</MenuButton>
              </Link>

              <Link to={PATH.BLOGS}>
                <MenuButton>Blogs</MenuButton>
              </Link>

              <Link to={PATH.PROFILE}>
                <MenuButton>Porfile</MenuButton>
              </Link>

            </Menu>
          </Box>

        </Box>
      </header>
    </Box>
  );

};

export default HeaderComponent;