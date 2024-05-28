"use client";
// React
import { useState } from "react";

// MUI Components
import { Container, ContainerProps, Box, BoxProps, styled } from "@mui/material";

// Classes
import { TextSelector, selectedTextType } from "@/classes";

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

// Themes
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material/styles";
import { GitHubDark } from "@/themes";

export default function Home() {
  // State
  const [markdownTitle, setMarkdownTitle] = useState<string>("untitled markdown");
  const [markdown, setMarkdown] = useState<string>("# Hello, World!");
  const [selection, setSelection] = useState<selectedTextType>({
    text: "",
    startPosition: -1,
    endPosition: -1
  });
  const [imageAltText, setImageAltText] = useState<string>("");
  const [footnoteCount, setFootnoteCount] = useState<number>(0);

  // Event handlers
  /**
   * Handles user events on a textarea element.
   * @param target Textarea HTML element reference.
   * @returns void or null.
   */
  const handleEditorEvent = ({ target }: any) => {
    const selector = new TextSelector(target, markdown);
    const sel = selector.getSelectedText();
    setSelection(sel);
    setImageAltText(sel.text);
    if (markdown === "") setFootnoteCount(0);
  }

  const PreviewBox = styled(Box)<BoxProps>(({ theme }) => ({
    border: `1px solid ${theme.palette.grey[700]}`,
    borderRadius: theme.shape.borderRadius
  }))

  return (
    <ThemeProvider theme={GitHubDark}>
      <CssBaseline />
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
          <CommandBar
            selection={selection}
            setSelection={setSelection}
            markdown={markdown}
            setMarkdown={setMarkdown}
            imageAltText={imageAltText}
            setImageAltText={setImageAltText}
            footnoteCount={footnoteCount}
            setFootnoteCount={setFootnoteCount}
          />
        </Box>
        <Box
          display="flex"
          flexGrow={1}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={5}
          >
          <Box
            maxHeight={780}
            minHeight={700}
            maxWidth={600}
            flexGrow={1}
            padding={1}
            overflow="auto"
          >
            <MDEditor
              markdown={markdown}
              handleChange={setMarkdown}
              handleEditorEvent={handleEditorEvent}
              editorOptions={{
                rows: 30,
                fullWidth: true,
                autoFocus: false,
                placeholder: "Type your markdown here.",
                variant: "outlined",
              }}
            />
          </Box>
          <PreviewBox
            maxHeight={725}
            minHeight={725}
            maxWidth={600}
            flexGrow={1}
            padding={2}
            overflow="auto"
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
          </PreviewBox>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
