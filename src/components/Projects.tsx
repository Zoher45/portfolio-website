import React from "react";
import Carousel from "react-material-ui-carousel";
import { CardActions, Chip, Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet";

const items = [
  {
    name: "Personal Website",
    description: `
                    This website was created to highlight key projects, about me, skills, and 
                    certifications.
                    This project was developed using React, TypeScript and Material-UI (MUI).
      `,
    imagePath: "./images/personal-website.jpg",
    projectLink: "https://github.com/Zoher45/portfolio-website",
    skills: "TypeScript,MUI,React,Vercel",
  },
  {
    name: "Client Website - Prime Finishes Limited",
    description: `
                    This was my first experience in creating and hosting a website for a small business.
                    It was created using Wix, Canva and hosted through GoDaddy.
      `,
    imagePath: "./images/prime-finishes-limited.jpg",
    projectLink: "",
    skills: "Wix,GoDaddy,Canva",
  },
  {
    name: "Employer Review Application",
    description: `
                    This was a group project, and the application was designed to review and provide feedback on employers. 
                    It features a simple user interface for previous/current employees, casual browsers, employers, and candidates to share and view reviews.
                    The project includes basic functionalities, such as viewing all employer rankings and linking reviews 
                    to user accounts.
      `,
    imagePath: "./images/employer-review-applicatio.jpg",
    projectLink: "https://github.com/Zoher45/Employer-Review-Application",
    skills: "PHP,jQuery,Bootstrap,SQLite",
  },
  {
    name: "Auction Web Application",
    description: `
                    This application, built with React, TypeScript, and Material-UI (MUI), enables users to 
                    create accounts, post listings, place bids, search for auctions, and view bidding history. Users can
                    browse auctions without logging in, but must be authenticated to post or bid. API testing was performed with 
                    Postman, and various libraries were integrated into the project.
      `,
    imagePath: "./images/auction-web-app.jpg",
    projectLink: "https://github.com/Zoher45/Auctions-Web-App",
    skills: "TypeScript,API,MUI,Postman,React",
  },
  {
    name: "Socket Programming",
    description: `
                    This socket programming is implemented using the TCP protocol. The main purpose 
                    is to establish an understanding of how socket programming works.
                    TCP implementation was done using Python for this project.
      `,
    imagePath: "./images/socket-programming.jpg",
    projectLink: "https://github.com/Zoher45/COSC264---Socket-Programming",
    skills: "Python",
  },
  {
    name: "Microcontroller Game - Catch",
    description: `
                    This project involved designing a game with the UC Fun kit (microcontroller) using C. In "Catch It," 
                    players time incoming lights and press the correct button when the light reaches row six. 
                    A successful press adds a point, while a missed press deducts a life point.

      `,
    imagePath: "./images/uc-fun-kit.jpg",
    projectLink: "https://github.com/Zoher45/ENCE260-Project",
    skills: "C,Computer Architecture",
  },
  {
    name: "Island Trader",
    description: `
                    This game was created during my second year in collaboration with my project partner, Jimmy.
                    The objective is to accumulate as much money as possible by traveling through islands, buying and selling items.
                    We developed the game using Java, with the GUI components created using Java Swing.
      `,
    imagePath: "./images/island-trader.jpg",
    projectLink: "https://github.com/Zoher45/SENG201_Project",
    skills: "Java,Java Swing,JUnit",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        paddingTop: 15,
        position: "relative",
        textAlign: "center",
      }}
    >
      <Helmet>
        <title>Projects | Zoher Hussein</title>
        <meta
          name="description"
          content="Explore key projects by Zoher Hussein, showcasing skills and technologies used in various applications including web development, software engineering, and more."
        />
      </Helmet>
      <Typography variant="h4" paddingBottom={3} gutterBottom>
        Projects
      </Typography>

      <Carousel
        navButtonsAlwaysVisible
        indicatorIconButtonProps={{
          style: {
            padding: "10px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "#0097a7",
            padding: "3px",
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "30px",
            textAlign: "center",
          },
        }}
      >
        {items.map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

const ProjectCard = ({ item }) => {
  return (
    <Card
      sx={{
        height: 750,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mx: "auto",
        my: 2,
      }}
    >
      <CardMedia
        component="img"
        src={item.imagePath}
        alt={`${item.name} - Project`}
        loading="lazy"
        sx={{ objectFit: "contain", height: 350, padding: "2px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {item.description}
        </Typography>
        <br />
        <Box>
          {item.skills.split(",").map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{ margin: "2px" }}
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
      {item.projectLink && (
        <CardActions
          sx={{
            justifyContent: "center",
            display: "flex",
            paddingBottom: 3,
          }}
        >
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
      )}
    </Card>
  );
};

export default Projects;
