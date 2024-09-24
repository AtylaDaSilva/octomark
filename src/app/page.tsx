"use client";
// React
import { useState, useRef, useEffect } from "react";

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
import "@/css/footer.css";
import "~/remark-github-blockquote-alert/alert.css"; // Styles for alert markdown

// Themes
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material/styles";
import { GitHubDark } from "@/themes";

// Utils
import { capitalize } from "@/functions/capitalize";
import {
  DEFAULT_MARKDOWN_TITLE,
  WINDOW_HEIGHT,
  MD_LOCAL_STORAGE_KEY,
  SHOW_PREVIEW_LOCAL_STORAGE_KEY
} from "@/utils/constants";

// Types
import type {
  TState,
  TReference
} from "@/types";

export default function Home() {
  // Reference
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const previewRef = useRef<HTMLDivElement>(null)

  // Constant to pass references around components
  const reference: TReference = {
    editorRef,
    monacoRef,
    previewRef
  }

  // State
  const [markdown, setMarkdown] = useState<string>(() => `# ${capitalize(DEFAULT_MARKDOWN_TITLE)}`);
  const [showPreview, setShowPreview] = useState(true)
  const [charCount, setCharCount] = useState<number>(markdown.length);

  // Constant to pass state around components
  const state: TState = {
    markdown, setMarkdown,
    showPreview, setShowPreview,
    charCount, setCharCount
  }

  // Event Handlers
  const handleEditorScrollEvent = (event: any) => {
    if (
      previewRef.current != null &&
      editorRef.current != null
    ) {
      previewRef.current.scrollTop = editorRef.current.getScrollTop()
    }
  }

  const handlePreviewScrollEvent = (event: any) => {
    if (
      previewRef.current != null &&
      editorRef.current != null
    ) {
      editorRef.current.setScrollPosition({ scrollTop: previewRef.current.scrollTop })
    }
  }

  const handleEditorDidMount = (editor: any, monaco: any) => {
    if (editor && monaco) {
      // Get References
      editorRef.current = editor;
      monacoRef.current = monaco

      // Handle scroll events
      editor.onDidScrollChange(handleEditorScrollEvent)
    }
  }

  useEffect(() => {
    const markdownCache = localStorage.getItem(MD_LOCAL_STORAGE_KEY);
    if (markdownCache) {
      setMarkdown(markdownCache);
      setCharCount(markdownCache.length);
    }

    const showPreviewCache = localStorage.getItem(SHOW_PREVIEW_LOCAL_STORAGE_KEY);
    if (showPreviewCache) {
      setShowPreview(JSON.parse(showPreviewCache))
    }
  }, [])

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
          <div onScroll={handleEditorScrollEvent}>
            <Editor
              height={WINDOW_HEIGHT}
              theme="vs-dark"
              language="markdown"
              onMount={handleEditorDidMount}
              onChange={(editorText?: string) => {
                setMarkdown(editorText ? editorText : "");
                localStorage.setItem(MD_LOCAL_STORAGE_KEY, editorText || "");
                setCharCount(editorText ? editorText.length : 0)
              }}
              value={markdown}
            />
          </div>
        </Grid>
        {
          showPreview && (
            <Grid
              item xs={6}
              paddingY={2}
              paddingX={1}
            >
              <PreviewHeader state={state} />
              <Preview reference={reference} markdown={state.markdown} handleScroll={handlePreviewScrollEvent} />
            </Grid>
          )
        }
        <Grid item xs={12} height="1.5rem">
          <Appfooter />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
