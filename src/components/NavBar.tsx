import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // Adjust delay so after load it will go to id element
    }
  };

  const handleNavigation = (to) => {
    if (to.startsWith("#")) {
      scrollToSection(to.substring(1)); // Remove the '#' from to
    } else {
      navigate(to);
      window.scrollTo(0, 0);
    }
  };

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/#projects" },
    { label: "About", to: "/#about" },
    { label: "Certifications", to: "/#certifications" },
    { label: "Posts", to: "/posts" },
  ];

  useEffect(() => {
    if (hash) {
      scrollToSection(hash.substring(1));
    }
  }, [hash]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#0097a7" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Zoher Hussein
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => handleNavigation(item.to)}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  variant="outlined"
                  sx={{ margin: "10px" }}
                  onClick={() => handleNavigation(item.to)}
                >
                  {item.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
