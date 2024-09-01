export function loadBlogPosts() {
  const context = require.context("../blog", false, /\.md$/);
  return context.keys().map((fileName) => {
    const slug = fileName.replace("./", "").replace(".md", "");
    const content = context(fileName);
    return { slug, content };
  });
}
