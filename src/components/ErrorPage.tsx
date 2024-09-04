import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = ({
  errorCode = "Error",
  errorMessage = "Oops! Something went wrong.",
}) => {
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
        <title>{`${errorCode} | Zoher Hussein`}</title>
        <meta
          name="description"
          content="An unexpected error occurred. Please try again later or go back to the homepage."
        />
      </Helmet>

      <Typography variant="h1" color="#0097a7" gutterBottom>
        {errorCode}
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        {errorMessage}
      </Typography>
      <Button
        variant="contained"
        onClick={handleGoHome}
        sx={{
          mt: 2,
          bgcolor: "#0097a7",
          "&:hover": {
            bgcolor: "#007b8f",
          },
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
