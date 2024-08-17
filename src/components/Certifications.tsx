import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Certifications = () => {
  var items = [
    {
      name: "Salesforce Certified AI Associate",
      issued: "August 2024",
      imagePath: "./images/salesforcecertifiedaIassociate.png", //TODO add image
    },
    {
      name: "Introduction to Cybersecurity",
      issued: "August 2023",
      imagePath: "./images/introductiontocybersecurity.png", //TODO add image
    },
    {
      name: "Salesforce Certified Administrator",
      issued: "July 2023",
      imagePath: "./images/salesforcecertifiedadministrator.png", //TODO add image
    },
    {
      name: "Salesforce Certified Associate",
      issued: "June 2023",
      imagePath: "./images/salesforcecertifiedassociate.png", //TODO add image
    },
  ];
  return (
    <Box
      id="certifications"
      sx={{
        textAlign: "center",
        paddingTop: 15,
        position: "relative",
      }}
    >
      <Typography variant="h4" paddingBottom={5} gutterBottom>
        Certifications
      </Typography>

      <Grid container direction="row" justifyContent={"center"}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Grid>
    </Box>
  );
};

function Item(props) {
  return (
    <Card sx={{ maxWidth: 250, margin: 1 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.item.imagePath}
        alt="Certification Image"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Issued: {props.item.issued}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Certifications;
