"use client";
// React
import { useState } from "react";

// MUI Components
import { Container, Box } from "@mui/material";

// Components
import Appbar from "@/components/Appbar";
import MDEditor from "@/components/MDEditor";
import MDPreview from "@/components/MDPreview";

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
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: "100vh",
        marginX: "0px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box>
        <Appbar />
      </Box>
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
        gap={5}
        sx={{
        backgroundColor: "#ffd700"
      }}>
        <Box
          maxHeight={700}
          minHeight={700}
          maxWidth={600}
          flexGrow={1}
          padding={1}
          overflow="auto"
          sx={{
            backgroundColor: "#a83232"
          }}
        >
          <MDEditor
            markdown={markdown}
            handleChange={setMarkdown}
            editorOptions={{
              rows: 30,
              fullWidth: true,
              placeholder: "Type your markdown here.",
              variant: "filled",
            }}
          />
        </Box>
        <Box
          maxHeight={700}
          minHeight={700}
          maxWidth={600}
          flexGrow={1}
          padding={1}
          overflow="auto"
          sx={{
            border: "1px solid black",
            backgroundColor: "#3236a8"
          }}
        >
          <MDPreview
            markdown={markdown}
            previewOptions={{
              remarkPlugins: [
                remarkGfm,
                remarkAlert,
                remarkGemoji,
                removeComments
              ],
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
