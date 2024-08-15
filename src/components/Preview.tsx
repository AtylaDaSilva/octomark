import { Box } from "@mui/material";
import Markdown from "react-markdown";

// Remark Plugins
import remarkGfm from "remark-gfm";
//import remarkGithub from "remark-github";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkGemoji from "remark-gemoji";
import removeComments from "remark-remove-comments";

// Constants
import { WINDOW_SIZE } from "@/utils/constants";

// Component types
export type PreviewType = {
    markdown?: string,
}

export default function Preview({ markdown } : PreviewType) {
    return (
        <Box height={WINDOW_SIZE}>
            <Markdown
                remarkPlugins={[
                    remarkGfm,
                    remarkAlert,
                    remarkGemoji,
                    removeComments
                ]}
            >
                {markdown}
            </Markdown>
        </Box>
    );
}