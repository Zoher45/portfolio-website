import React from "react";
import Carousel from "react-material-ui-carousel";
import { CardActions, Chip, Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery } from "@mui/material";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const items = [
    {
      name: "Personal Website",
      description: `
        This website was created to highlight key projects, about me, skills, and 
        certifications. <br/>
        This project was developed using React, TypeScript, and Material-UI (MUI).
      `,
      imagePath: "./images/personalwebsite.jpg",
      projectLink: "https://github.com/Zoher45/portfolio-website",
      skills: "TypeScript,MUI,React",
    },
    {
      name: "Auction Web Application",
      description: `
        This web application project was an auction website. <br/>
        Users could create accounts, and authentication was set up to allow posting
        listings, bidding on listings, searching auctions, and viewing bidding history. 
        Users could view auctions without logging in but could not post or bid without an account. <br/>
        This project was developed using React, TypeScript, and Material-UI (MUI). API testing was conducted using 
        Postman, and various libraries were used throughout the project. <br/>
      `,
      imagePath: "./images/auctionwebapp.jpg",
      projectLink: "https://github.com/Zoher45/Auctions-Web-App",
      skills: "TypeScript,API,MUI,Postman,React",
    },
    {
      name: "Socket Programming",
      description: `
        This socket programming is implemented using the TCP protocol. The main purpose 
        is to establish an understanding of how socket programming works. <br/>
        TCP implementation was done using Python for this project.
      `,
      imagePath: "./images/socketprogramming.jpg",
      projectLink: "https://github.com/Zoher45/COSC264---Socket-Programming",
      skills: "Python",
    },
    {
      name: "Microcontroller Game - Catch",
      description: `
        This project was done in pairs where our task was to design a game that utilized the
        UC Fun kit (microcontroller). The software was developed using C, applying skills learned 
        from computer architecture and embedded systems. <br/>
        Catch it is a game where the player is trying to time the incoming lights. The player has control 
        of row six. The aim is to press the according button when the light is at row six. If timed as expected 
        there is a beep and a point is added to the score or else a life point is deducted.
      `,
      imagePath: "./images/ucfunkit.jpg",
      projectLink: "https://github.com/Zoher45/ENCE260-Project",
      skills: "C,Computer Architecture",
    },
    {
      name: "Island Trader",
      description: `
        This game was created during my second year in collaboration with my project partner, Jimmy. <br/>
        The objective is to accumulate as much money as possible by traveling through islands, buying and selling items. <br/>
        We developed the game using Java, with the GUI components created using Java Swing.
      `,
      imagePath: "./images/sengproject.jpg",
      projectLink: "https://github.com/Zoher45/SENG201_Project",
      skills: "Java,Java Swing,JUnit",
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        paddingTop: 15,
        position: "relative",
        textAlign: "center",
        px: { xs: 2, sm: 4 },
      }}
    >
      <Typography variant="h4" paddingBottom={5} gutterBottom>
        Projects
      </Typography>

      <Carousel
        navButtonsAlwaysVisible={true}
        indicators={isMobile} 
        sx={{ maxWidth: "100%" }} 
      >
        {items.map((item, i) => (
          <Item key={i} item={item} isMobile={isMobile} />
        ))}
      </Carousel>
    </Box>
  );
};

function Item({ item, isMobile }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mx: "auto",
        my: 2,
        maxWidth: isMobile ? 300 : 400, 
        height: "auto", 
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        src={item.imagePath}
        alt={item.name}
        sx={{ objectFit: "contain", height: isMobile ? 200 : 250 }}
      />
      <CardContent>
        <Typography gutterBottom variant={isMobile ? "h6" : "h5"} component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span dangerouslySetInnerHTML={{ __html: item.description }} />
        </Typography>
        <Box sx={{ my: 2 }}>
          {item.skills.split(",").map((skill) => (
            <Chip key={skill} label={skill} sx={{ marginX: 0.5 }} variant="outlined" />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          color="inherit"
          target="_blank"
          variant="outlined"
          sx={{ color: "black" }}
          href={item.projectLink}
        >
          Find Out More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Projects;
