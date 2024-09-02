import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Helmet>
        <title>Error | Zoher Hussein</title>
        <meta
          name="description"
          content="This is an error page that user has come across. Where the page doesn't exist."
        />
      </Helmet>

      <Typography variant="h1" color="#0097a7" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        onClick={handleGoHome}
        sx={{
          mt: 2,
          bgcolor: "#0097a7",
          "&:hover": {
            bgcolor: "#007b8f", //removes the variant hover
          },
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
