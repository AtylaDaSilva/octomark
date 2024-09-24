import { PreviewBox } from "@/components/styled/PreviewBox"
import Markdown from "react-markdown";
import Link from "next/link";

// Remark Plugins
import remarkGfm from "remark-gfm";
//import remarkGithub from "remark-github";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkGemoji from "remark-gemoji";
import removeComments from "remark-remove-comments";

// Constants
import { WINDOW_HEIGHT } from "@/utils/constants";

// Types
import { TPreviewProps } from "@/types";

export default function Preview({ reference, markdown, handleScroll }: TPreviewProps) {
    return (
        <PreviewBox height={WINDOW_HEIGHT} ref={reference.previewRef} onScroll={handleScroll}>
            <Markdown
                remarkPlugins={[
                    remarkGfm,
                    remarkAlert,
                    remarkGemoji,
                    removeComments
                ]}
                components={{
                    a: ({ node, href, children, ...props }) => (
                        <Link
                            href={String(href)}
                            target="_blank"
                            {...props}
                        >
                            {children}
                        </Link>
                    )
                }}
            >
                {markdown}
            </Markdown>
        </PreviewBox>
    );
}