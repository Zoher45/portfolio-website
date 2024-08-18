import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Certifications = () => {
  const items = [
    {
      name: "Salesforce Certified AI Associate",
      issued: "August 2024",
      imagePath: "./images/salesforce-certified-aI-associate.png",
    },
    {
      name: "Introduction to Cybersecurity",
      issued: "August 2023",
      imagePath: "./images/introduction-to-cybersecurity.png",
    },
    {
      name: "Salesforce Certified Administrator",
      issued: "July 2023",
      imagePath: "./images/salesforce-certified-administrator.png",
    },
    {
      name: "Salesforce Certified Associate",
      issued: "June 2023",
      imagePath: "./images/salesforce-certified-associate.png",
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
      <Typography variant="h4" paddingBottom={5} gutterBottom>
        Certifications
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                maxWidth: 250,
                margin: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.imagePath}
                alt={item.name}
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
