import React from "react";
import { Box, Typography, Grid, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Helmet } from "react-helmet";

const Certifications = () => {
  const items = [
    {
      name: "Salesforce Certified AI Associate",
      issued: "August 2024",
      imagePath: "./images/salesforce-certified-aI-associate.png",
      link: "https://www.salesforce.com/trailblazer/zoherh",
    },
    {
      name: "Introduction to Cybersecurity",
      issued: "August 2023",
      imagePath: "./images/introduction-to-cybersecurity.png",
      link: "https://www.credly.com/badges/0811f619-8a20-4512-a8df-6b50a4fcac0a/linked_in_profile",
    },
    {
      name: "Salesforce Certified Administrator",
      issued: "July 2023",
      imagePath: "./images/salesforce-certified-administrator.png",
      link: "https://www.salesforce.com/trailblazer/zoherh",
    },
    {
      name: "Salesforce Certified Associate",
      issued: "June 2023",
      imagePath: "./images/salesforce-certified-associate.png",
      link: "https://www.salesforce.com/trailblazer/zoherh",
    },
  ];

  return (
    <Box
      id="certifications"
      sx={{
        textAlign: "center",
        paddingY: 15,
        paddingX: { xs: 2, sm: 4 },
        position: "relative",
      }}
    >
      <Helmet>
        <title>Zoher Hussein</title>
        <meta
          name="description"
          content="View Zoher Hussein's certifications, including Salesforce and cybersecurity credentials. Explore the details of each certification earned and the verification source."
        />
      </Helmet>

      <Typography variant="h4" paddingBottom={5} gutterBottom>
        Certifications
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={item.name}>
            <Card
              sx={{
                maxWidth: 250,
                margin: "auto",
                borderRadius: 2,
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px #0097a7",
                },
              }}
            >
              <CardActionArea
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`View details for ${item.name}`}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.imagePath}
                  alt={`Certification badge for ${item.name}`}
                  loading="lazy"
                  sx={{ objectFit: "contain", paddingTop: 1 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Issued: {item.issued}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
