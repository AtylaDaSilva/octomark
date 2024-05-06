"use client";
// React
import { useState } from "react";

// MUI Components
import { Container, Box } from "@mui/material";

// Classes]
import { TextSelector } from "@/classes";

// Components
import Appbar from "@/components/Appbar";
import CommandBar from "@/components/CommandBar";
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
  // State
  const [markdownTitle, setMarkdownTitle] = useState("untitled markdown");
  const [markdown, setMarkdown] = useState("# Hello, World!");

  // Event handlers
  /**
   * Handles mouse up and double click mouse events on a textarea element.
   * @param target Textarea HTML element reference.
   * @returns void or null.
   */
  const handleMouseUpAndDoubleClick = ({ target }: any) => {
    // Ignores single click mouse events
    if (target.selectionStart === target.selectionEnd) return null;

    const selector = new TextSelector(target, markdown);
    const selection = selector.getSelectedText();
    console.log(selection);
  }

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
        <Appbar title={markdownTitle} />
      </Box>

      <Box
        margin="10px 35px"
      >
        <CommandBar />
      </Box>

      <Box
        display="flex"
        flexGrow={1}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={5}
        sx={{
          backgroundColor: "#ffd700"
        }}>
        <Box
          maxHeight={780}
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
            handleTextareaMouseEvent={handleMouseUpAndDoubleClick}
            editorOptions={{
              rows: 30,
              fullWidth: true,
              autoFocus: true,
              placeholder: "Type your markdown here.",
              variant: "filled",
            }}
          />
        </Box>
        <Box
          maxHeight={780}
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
