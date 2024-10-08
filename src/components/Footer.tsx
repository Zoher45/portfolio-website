import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0097a7",
        color: "white",
        padding: "20px",
        mt: 5,
      }}
    >
      <Container maxWidth="sm">
        <Grid
          container
          spacing={5}
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              Zoher Hussein
            </Typography>
            <Typography variant="body2">
              Software Engineer, passionate about software, technology, and
              continuous development.
            </Typography>
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                <Box display="flex" alignItems="center">
                  <IconButton
                    component={Link}
                    href="https://www.linkedin.com/in/zoher-hussein/"
                    target="_blank"
                    aria-label="LinkedIn"
                    sx={{ color: "white", "&:hover": { color: "#005582" } }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Box>

                <Box display="flex" alignItems="center">
                  <IconButton
                    component={Link}
                    href="https://github.com/Zoher45"
                    target="_blank"
                    aria-label="GitHub"
                    sx={{ color: "white", "&:hover": { color: "#000" } }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Box>

                <Box display="flex" alignItems="center">
                  <IconButton
                    component={Link}
                    href="https://www.salesforce.com/trailblazer/zoherh"
                    target="_blank"
                    aria-label="Trailhead"
                    sx={{ color: "white", "&:hover": { color: "#007bb5" } }}
                  >
                    <Box
                      component="img"
                      src="/images/trailhead-inverted.svg"
                      alt="Trailhead Icon"
                      sx={{ width: 30, height: "auto" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box display="flex" alignItems="center" sx={{ paddingTop: 2 }}>
              <EmailIcon fontSize="large" />
              <Link
                href="mailto:zoher.azhar.hussein@gmail.com"
                color="inherit"
                sx={{ ml: 1 }}
              >
                zoher.azhar.hussein@gmail.com
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Zoher Hussein. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
