import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box, Typography } from "@mui/material";
import { fetchMarkdown } from "../utils/fetchMarkdown.tsx";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import CodeBlock from "../utils/CodeBlock.tsx";

const SeoLearnings = () => {
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const getContent = async () => {
      try {
        const text = await fetchMarkdown("seo-learnings");
        setContent(text);
      } catch (err) {
        console.error(err);
        navigate("/error");
      }
    };
    getContent();
  }, [navigate]);

  if (!content) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <Box sx={{ paddingTop: 10, paddingX: 2, maxWidth: 800, margin: "0 auto" }}>
      <Helmet>
        <title>SEO Learnings | Zoher Hussein</title>
        <meta
          name="description"
          content="Learn about Search Engine Optimization (SEO) and how to improve your website's visibility through effective SEO techniques."
        />
        <meta
          name="keywords"
          content="SEO, Search Engine Optimization, Website Visibility, SEO Techniques, Zoher Hussein"
        />
        <meta property="og:title" content="SEO Learnings | Zoher Hussein" />
        <meta
          property="og:description"
          content="Learn about Search Engine Optimization (SEO) and how to improve your website's visibility through effective SEO techniques."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.zoherhussein.com/post/seo-learnings"
        />
      </Helmet>
      {/* Centered title */}
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: 4, fontWeight: "bold" }}
      >
        My SEO Learnings
      </Typography>
      {/* Left-aligned content */}
      <Box sx={{ textAlign: "left", paddingY: 8 }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={content}
          components={{ code: CodeBlock }}
        />
      </Box>
    </Box>
  );
};

export default SeoLearnings;
