"use client";
// React
import { useState } from "react";
import Markdown from "react-markdown";

// Remark Plugins
import remarkGfm from "remark-gfm";
//import remarkGithub from "remark-github";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkGemoji from "remark-gemoji";
import removeComments from "remark-remove-comments";

// CSS
import "@/css/globals.css";
import "~/remark-github-blockquote-alert/alert.css"; // Styles for alert markdown

export default function Home() {
  const [markdown, setMarkdown] = useState("# Hello, World!");
  return (
    <main>
      <textarea cols={30} rows={10} value={markdown} onChange={(event) => setMarkdown(event.target.value)}></textarea>
      <Markdown
        remarkPlugins={[remarkGfm, remarkAlert, remarkGemoji, removeComments]}
      >
        { markdown }
      </Markdown>
    </main>
  );
}
