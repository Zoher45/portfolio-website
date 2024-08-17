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

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#0097a7" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                    onClick={handleClose}
                    component="a"
                    href={item.href}
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
                  sx={{ margin: " 10px" }}
                  href={item.href}
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
