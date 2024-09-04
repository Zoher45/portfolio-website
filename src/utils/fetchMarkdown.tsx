// src/utils/fetchMarkdown.js
export const fetchMarkdown = async (slug) => {
  try {
    const response = await fetch(`/post_files/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch the Markdown file: ${slug}`);
    }

    const mdText = await response.text();

    // Check if the fetched content is an HTML error page instead of Markdown
    if (mdText.startsWith("<!DOCTYPE html>")) {
      throw new Error(
        `Received an HTML response instead of Markdown for: ${slug}`
      );
    }

    return mdText;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};
