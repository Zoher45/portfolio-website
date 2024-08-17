import "./App.css";
import Navbar from "./components/NavBar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Certifications from "./components/Certifications.tsx";
import Projects from "./components/Projects.tsx";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontFamily: "Roboto Slab, serif",
      fontWeight: 700,
      color: "#0097a7",
    },
    h6: {
      fontFamily: "Roboto Slab, serif",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "black",
          transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.5)",
          },
        },
      },
    },
  },
});

// Define global styles
const globalStyles = {
  body: {
    fontFamily: "Roboto, Arial, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: "#E0E0E0 !important",
  },
  h4: {
    fontFamily: "Roboto Slab, serif",
    fontWeight: 700,
  },
  h6: {
    fontFamily: "Roboto Slab, serif",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Home />
          <About />
          <Projects />
          <Certifications />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
