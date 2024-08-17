import React from "react";
import { Box, Typography, Card } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const About = () => {
  var items = [
    {
      title: "Begining The Journey",
      icon: <CodeIcon />,
      body: `
            I first began learning about computer science and programming in
            high school.
            <br />
            We studied the theories behind programs, software principles,
            basic algorithms, and the fundamentals of the field. With the
            help of my tutors and lecturers, I found myself enamored.
            Bringing these softwares to life and learning how we can create
            something so complex from scratch seemed like a limitless world
            to me. And I was all for it!
            <br />
      `,
    },
    {
      title: "Pursuing A Computer Science Degree At University",
      icon: <SchoolIcon />,
      body: `
            After a couple of gap years, I began studying Computer Science
            at the University of Canterbury in 2020. <br />
            It was a challenging couple of years, but I learned a lot of
            valuable skills that I'm grateful to have had the opportunity to
            acquire. <br />
            In the first year, we covered algorithms, mathematics,
            statistics, and an introductory course to science as a whole. We
            also worked on some mini-projects that kept me on my toes. <br />
            The second year was a little more intense. We worked on many
            projects, with the biggest highlight being the game we made. We
            developed the GUI, logic, and tests. It was an intense project
            but incredibly fun and a proud milestone. Another project I was
            proud of was the socket programming project, where we
            implemented the TCP protocol to communicate between the server
            and the client. <br />
            During the summer, I did an internship at a startup called
            Sudo-code as a software developer. I worked on a mobile app
            called WopWop. It was awesome to get some industry experience,
            and I learned a lot about the various intricacies behind
            software development. <br />
            In the final year, we worked on a year-long project, using
            sprints and learning about how things are done in the industry.
            Working in small groups, we developed a project management tool.
            We implemented various libraries, worked with stakeholders,
            planned, demoed our work at every sprint review, and held
            retrospectives. <br />
            Another project I'm really proud of from this year was the
            Auction Web app. It was another intense project, but I
            definitely learned a lot. <br />
            At the end of 2022, I graduated and received an offer from Xero
            for a graduate position as a Salesforce Engineer.
      `,
    },
    {
      title: "Starting My Career At Xero",
      icon: <WorkIcon />,
      body: `
            I began my career at Xero as a Graduate Salesforce Engineer. As
            a graduate, I had various opportunities to learn, grow, and
            develop my skills. I started by learning about Salesforce, which
            was new to me at the time. While working, I also began studying
            for certifications.
            <br />
            I learned about the functional and programmatic sides of
            Salesforce, including its usage, and gained insights into
            working with stakeholders, team members, vendors, Xero Central,
            Service Cloud, Experience Cloud, and more.
            <br />
            I also met many amazing and talented Xeros. Working alongside
            and learning from everyone has been instrumental in developing
            my skills, not just as an engineer but also as a person.
            <br />A key project for our team was the redesign of the
            case-raising journey via Xero Central. We designed a scalable
            solution that combined a programmatic and functional approach,
            allowing for modular components to be integrated into the
            case-raising journey.
            <br /> I'm currently an Associate Salesforce Engineer. As an
            associate, I've become more involved with complex tasks, working
            on broader tickets while delving deeper into specific areas.
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
      }}
    >
      <Typography variant="h4" paddingBottom={5} gutterBottom>
        About Me
      </Typography>
      <TimelineMap />
    </Box>
  );
  function TimelineMap() {
    return (
      <Timeline position="alternate">
        {items.map((item) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="h6"
              color="text.secondary"
            >
              {item.title}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">{item.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Card sx={{ padding: 2, textAlign: "left" }}>
                <Typography variant="body2">
                  <span dangerouslySetInnerHTML={{ __html: item.body }} />
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    );
  }
};

export default About;
