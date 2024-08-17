import React from "react";
import { Box, Typography, Avatar, Grid, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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
        paddingTop: 15,
        position: "relative",
      }}
    >
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
            animation: `
              typing 3.5s steps(14, end) forwards,
              blink-caret 0.75s step-end infinite,
              stop-blinking 1s step-end forwards 3s
            `,
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
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingTop={5}
        spacing={2}
      >
        <Grid item>
          <Avatar
            alt="Profile Picture"
            src="./images/avatar.jpg"
            sx={{
              width: 250,
              height: 250,
              border: "2px solid grey",
              boxShadow: "0 5px 13px 0 #0097a7",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              textAlign: "center",
              fontVariant: "h6",
            }}
            gutterBottom
          >
            I'm an Associate Salesforce Engineer @ Xero. I'm passionate about
            software, technology, and learning! This website highlights some key
            projects, certifications, and skills I've developed and am currently
            developing.
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ paddingTop: 2 }}
          >
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/zoher-hussein/"
              target="_blank"
              aria-label="LinkedIn account link"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:zoher.azhar.hussein@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail to email option"
            >
              <EmailIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/Zoher45"
              target="_blank"
              aria-label="GitHub account link"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.salesforce.com/trailblazer/profile"
              target="_blank"
              aria-label="Trailhead account link"
            >
              <Box
                component="img"
                src="/images/trailhead.svg"
                alt="Trailhead Icon"
                sx={{ width: 30, height: "auto", color: "black" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
