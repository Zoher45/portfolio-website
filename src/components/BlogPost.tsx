// src/pages/BlogPost.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box, Typography } from "@mui/material";

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the Markdown file from the public folder
    fetch(`/blog/${slug}.md`)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!content) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        {slug.replace("-", " ")}
      </Typography>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Box>
  );
};

export default BlogPost;