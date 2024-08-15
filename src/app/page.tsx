"use client";
// React
import { useState, Dispatch, SetStateAction } from "react";

// MUI Components
import { Box, BoxProps, Grid, styled } from "@mui/material";

import { Editor } from "@monaco-editor/react";

// Classes
import { TextSelector, selectedTextType } from "@/classes";

// Components
import Appbar from "@/components/Appbar";
import EditorHeader from "@/components/EditorHeader";
import Appfooter from "@/components/Appfooter";

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

// Utils
import { capitalize } from "@/functions/capitalize";
import { DEFAULT_MARKDOWN_TITLE } from "@/utils/constants";

// State type
export type stateType = {
  markdown?: string, setMarkdown?: Dispatch<SetStateAction<string>>,
  selection?: selectedTextType, setSelection?: Dispatch<SetStateAction<selectedTextType>>,
  imageAltText?: string, setImageAltText?: Dispatch<SetStateAction<string>>,
  footnoteCount?: number, setFootnoteCount?: Dispatch<SetStateAction<number>>,
  showPreview?: boolean, setShowPreview?: Dispatch<SetStateAction<boolean>>
}

export default function Home() {
  // State
  const [markdown, setMarkdown] = useState<string>(() => `# ${capitalize(DEFAULT_MARKDOWN_TITLE)}`);
  const [selection, setSelection] = useState<selectedTextType>({
    text: "",
    startPosition: -1,
    endPosition: -1
  });
  const [imageAltText, setImageAltText] = useState<string>("");
  const [footnoteCount, setFootnoteCount] = useState<number>(0);
  const [showPreview, setShowPreview] = useState(true)

  // Constant to pass state around components
  const state: stateType = {
    markdown, setMarkdown,
    selection, setSelection,
    imageAltText, setImageAltText,
    footnoteCount, setFootnoteCount,
    showPreview, setShowPreview
  }

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

  // Styled Components
  const PreviewBox = styled(Box)<BoxProps>(({ theme }) => ({
    border: `1px solid ${theme.palette.grey[700]}`,
    borderRadius: theme.shape.borderRadius
  }))

  return (
    <ThemeProvider theme={GitHubDark}>
      <CssBaseline />
      <Grid
        container
        height="100%"
      >
        <Grid item xs={12}>
          <Appbar />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          paddingX={3}
          paddingY={2}
        >
          <EditorHeader state={state}/>
          <Editor height="78vh" theme="vs-dark" language="markdown" value={markdown}/>
        </Grid>
        <Grid item xs={12}>
          <Appfooter />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
