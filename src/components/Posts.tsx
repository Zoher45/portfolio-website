import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    slug: "seo-learnings",
    title: "Search Engine Optimization - Learnings",
    brief:
      "This article covers how I learned and applied SEO basics to improve my website's visibility.",
    readingTime: "5 min read",
  },
];

const Posts = () => {
  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    navigate(`/post/${slug}`);
  };

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
        paddingX: 2,
      }}
    >
      <Helmet>
        <title>Blog Posts | Zoher Hussein</title>
        <meta
          name="description"
          content="Browse blog posts by Zoher Hussein covering a range of topics including SEO, tech guides, and more. Find valuable insights and information."
        />
        <meta
          name="keywords"
          content="blog, posts, Zoher Hussein, SEO, tech guides, articles"
        />
        <meta property="og:title" content="Blog Posts | Zoher Hussein" />
        <meta
          property="og:description"
          content="Browse blog posts by Zoher Hussein covering a range of topics including SEO, tech guides, and more. Find valuable insights and information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zoherhussein.com/posts" />
        <meta
          property="og:image"
          content="https://www.zoherhussein.com/path/to/your-image.jpg"
        />{" "}
        {/* Replace with actual image URL */}
        <meta property="og:image:alt" content="Blog Posts by Zoher Hussein" />
      </Helmet>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Blog Posts
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          mt: 4,
        }}
      >
        {blogPosts.map((post) => (
          <Card
            key={post.slug}
            sx={{
              width: 320,
              height: 220,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 24px #0097a7",
              },
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <CardActionArea onClick={() => handleNavigate(post.slug)}>
              <CardContent>
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ minHeight: 60 }}
                >
                  {post.brief}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <AccessTime sx={{ fontSize: 16, marginRight: 0.5 }} />
                  <Typography variant="body2" color="textSecondary">
                    {post.readingTime}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Posts;
