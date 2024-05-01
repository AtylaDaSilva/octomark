import Markdown from "react-markdown";
import type { MDPreviewType } from "@/utils/types";

export default function MDPreview({ markdown, previewOptions } : MDPreviewType) {
    return (
        <Markdown
            remarkPlugins={previewOptions?.remarkPlugins}
        >
            {markdown}
        </Markdown>
    );
}