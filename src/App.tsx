import "./App.css";
import Navbar from "./components/NavBar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Certifications from "./components/Certifications.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog.tsx"; // Your blog post component
import BlogPost from "./components/BlogPost.tsx"; // Your blog post component

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontFamily: "Roboto Slab, Roboto",
      fontWeight: 700,
      color: "#0097a7",
    },
    h5: {
      fontFamily: "Roboto Slab, Roboto",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "Roboto Slab, Roboto",
    },
    body1: {
      fontFamily: "Roboto Slab, Roboto",
      fontSize: "20px",
    },
    body2: {
      fontFamily: "Roboto Slab, Roboto",
      fontSize: "17px",
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
    fontFamily: "Roboto, Roboto",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: "#E0E0E0 !important",
  },
  h4: {
    fontFamily: "Roboto Slab, Roboto",
    fontWeight: 700,
  },
  h6: {
    fontFamily: "Roboto Slab, Roboto",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      <Router>
        <Navbar />
        <main>
          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              minHeight: "100vh",
            }}
          >
            <Box sx={{ my: 4 }}>
              <Routes>
                {/* Blog Post Route */}
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/blogs" element={<Blog />} />

                {/* Default Route for all other pages */}
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                      <Projects />
                      <About />
                      <Certifications />
                    </>
                  }
                />
              </Routes>
            </Box>
          </Container>
          <Footer />
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
