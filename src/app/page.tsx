"use client";
// React
import { useState, useRef } from "react";

// MUI Components
import { Grid } from "@mui/material";

// Monaco Editor
import { Editor, } from "@monaco-editor/react";

// Components
import Appbar from "@/components/Appbar";
import EditorHeader from "@/components/EditorHeader";
import PreviewHeader from "@/components/PreviewHeader";
import Preview from "@/components/Preview";
import Appfooter from "@/components/Appfooter";

// CSS
import "@/css/globals.css";
import "~/remark-github-blockquote-alert/alert.css"; // Styles for alert markdown

// Themes
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material/styles";
import { GitHubDark } from "@/themes";

// Utils
import { capitalize } from "@/functions/capitalize";
import { DEFAULT_MARKDOWN_TITLE, WINDOW_HEIGHT } from "@/utils/constants";

// Types
import type {
  TState,
  TReference
} from "@/types";

export default function Home() {
  // Reference
  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  // Constant to pass references around components
  const reference: TReference = {
    editorRef,
    monacoRef
  }

  // State
  const [markdown, setMarkdown] = useState<string>(() => `# ${capitalize(DEFAULT_MARKDOWN_TITLE)}`);
  const [showPreview, setShowPreview] = useState(true)

  // Constant to pass state around components
  const state: TState = {
    markdown, setMarkdown,
    showPreview, setShowPreview
  }

  // Event Handlers
  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    monacoRef.current = monaco
  }

  return (
    <ThemeProvider theme={GitHubDark}>
      <CssBaseline />
      <Grid
        container
        height="100%"
        rowSpacing={1}
      >
        <Grid item xs={12} height="3rem">
          <Appbar />
        </Grid>
        <Grid
          item
          xs={showPreview ? 6 : 12}
          display="flex"
          flexDirection="column"
          paddingY={2}
          paddingX={1}
        >
          <EditorHeader state={state} reference={reference} />
          <Editor
            height={WINDOW_HEIGHT}
            theme="vs-dark"
            language="markdown"
            onMount={handleEditorDidMount}
            onChange={(editorText?: string) => setMarkdown(editorText ? editorText : "")}
            value={markdown}
          />
        </Grid>
        {
          showPreview && (
            <Grid
              item xs={6}
              paddingY={2}
              paddingX={1}
            >
              <PreviewHeader />
              <Preview markdown={state.markdown} />
            </Grid>
          )
        }
        <Grid item xs={12}>
          <Appfooter />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
