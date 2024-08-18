import React from "react";
import {Box, Typography, Card, CardContent, CardMedia, Grid, useMediaQuery, useTheme} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = [
    {
      title: "Beginning The Journey",
      icon: <CodeIcon sx={{ color: "#0097a7", fontSize: 40 }} />,
      body: `
            My journey into computer science and programming began in high school, 
            where I was amazed by the theories, software principles, and basic algorithms we studied. 
            With the help of my tutors and lecturers, I found myself enamored. Bringing these softwares to life and 
            learning how we can create something so complex from scratch seemed like a limitless world to me. And I was all for it!
      `,
    },
    {
      title: "Pursuing A Computer Science Degree At University",
      icon: <SchoolIcon sx={{ color: "#0097a7", fontSize: 40 }} />,
      body: `
            After taking a couple of gap years, I began studying Computer Science at the University of Canterbury in 2020. The program was challenging but immensely rewarding, covering everything from algorithms to mathematics and culminating in complex projects like a game development
            project and a socket programming project using the TCP protocol. Alongside my studies, I gained industry experience through an internship at Sudo-code, and by the end of 2022, I graduated and accepted a graduate Salesforce Engineer position at Xero.
      `,
    },
    {
      title: "Starting My Career At Xero",
      icon: <WorkIcon sx={{ color: "#0097a7", fontSize: 40 }} />,
      body: `
          I started my career at Xero as a Graduate Salesforce Engineer, where I had the opportunity to learn about Salesforce and pursue certifications while working on various projects. I gained experience in both the functional and programmatic aspects of Salesforce,
          collaborated with stakeholders, and worked on significant projects like redesigning the case-raising journey via Xero Central. Now, as an Associate Salesforce Engineer, I handle more complex tasks and continue to deepen my expertise in specific areas.
      `,
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        textAlign: "center",
        paddingTop: 15,
        position: "relative",
        px: isMobile ? 2 : 4,
      }}
    >
      <Typography variant="h4" paddingBottom={5} gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  width: 60,
                  mt: 2,
                }}
              >
                {item.icon}
              </CardMedia>
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
