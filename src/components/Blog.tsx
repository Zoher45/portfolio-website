// src/pages/Blog.js
import React from "react";
import { Box, Typography, Link } from "@mui/material";

const blogPosts = [
  {
    slug: "seo",
    title: "SEO Best Practices",
  },
];

const Blog = () => {
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
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
      {blogPosts.map((post) => (
        <Box key={post.slug} sx={{ marginBottom: 3 }}>
          <Link href={`/blog/${post.slug}`} underline="hover">
            <Typography variant="h6">{post.title}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Blog;
