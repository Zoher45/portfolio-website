import React from 'react';
import type { Metadata } from 'next'
import '../index.css'
 
export const metadata: Metadata = {
  title: "Zoher Hussein | Software Engineer Portfolio",
  description: "Zoher Hussein's portfolio website showcasing software engineering skills, Salesforce certifications, projects, and professional experience. Explore Zoher's work and expertise."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
