import React from "react";
import { Box, Typography, Avatar, Grid, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Helmet } from "react-helmet";

const emailButtonStyle = {
  color: "#d14836",
  "&:hover": {
    color: "#a53426",
  },
};

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 10,
        position: "relative",
      }}
    >
      <Helmet>
        <title>Home | Zoher Hussein</title>
        <meta
          name="description"
          content="This is the portfolio of Zoher Hussein, a software engineer specializing in Salesforce and web development. In this page you can view the author, an introduction, and contact information."
        />
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Zoher Hussein",
        "jobTitle": "Associate Salesforce Engineer",
        "url": "https://www.zoherhussein.com",
        "sameAs": [
          "https://www.linkedin.com/in/zoher-hussein/",
          "https://github.com/Zoher45",
          "https://www.salesforce.com/trailblazer/zoherh"
        ],
        "email": "zoher.azhar.hussein@gmail.com",
        "alumniOf": {
          "@type": "Organization",
          "name": "University of Canterbury "
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Xero"
        }
      }
    `}
        </script>
      </Helmet>

      <Typography variant="h6" gutterBottom>
        <Box
          component="span"
          sx={{
            display: "inline-block",
            position: "relative",
            overflow: "hidden",
            borderRight: "0.15em solid black",
            whiteSpace: "nowrap",
            letterSpacing: "0.1em",
            fontFamily: "Roboto Mono, monospace",
            animation: `typing 3.5s steps(14, end) forwards,
              blink-caret 0.75s step-end infinite,
              stop-blinking 1s step-end forwards 3s`,
          }}
        >
          HELLO WORLD!
        </Box>
      </Typography>

      <Typography variant="h4" gutterBottom>
        Hey, I'm Zoher And Welcome To My Website!
      </Typography>

      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ paddingTop: 5 }}
      >
        <Grid item>
          <Avatar
            sx={{
              width: { xs: 150, sm: 250, md: 300 },
              height: { xs: 150, sm: 250, md: 300 },
              border: "2px solid grey",
              boxShadow: "0 5px 13px 0 #0097a7",
            }}
          >
            <img
              src="./images/avatar.jpg"
              alt="Zoher Hussein - Associate Salesforce Engineer at Xero."
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Avatar>
        </Grid>
        <Grid item xs={10} sm={8} md={6}>
          <Typography
            variant="body1"
            sx={{
              marginTop: { xs: 2, sm: 0 },
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            I'm an Associate Salesforce Engineer at Xero. I'm passionate about
            software, technology, and learning! This website highlights some key
            projects, certifications, and skills I've developed and am currently
            developing.
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 3 }}
          >
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/zoher-hussein/"
              target="_blank"
              aria-label="LinkedIn account link"
              sx={{ color: "#0077b5", "&:hover": { color: "#005582" } }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:zoher.azhar.hussein@gmail.com"
              target="_top"
              rel="noopener noreferrer"
              aria-label="Email option"
              sx={emailButtonStyle}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/Zoher45"
              target="_blank"
              aria-label="GitHub account link"
              sx={{ color: "#333", "&:hover": { color: "#000" } }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.salesforce.com/trailblazer/zoherh"
              target="_blank"
              aria-label="Trailhead account link"
              sx={{ color: "#00A1E0", "&:hover": { color: "#007bb5" } }}
            >
              <Box
                component="img"
                src="/images/trailhead.svg"
                alt="Trailhead Icon"
                sx={{ width: 30, height: "auto" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
