import Markdown from "react-markdown";
import type { PluggableList } from "~/react-markdown/lib";

// Component types
export type MDPreviewType = {
    markdown: string,
    previewOptions?: MDPreviewOptions
}

export type MDPreviewOptions = {
    remarkPlugins?: PluggableList | null
}

export default function MDPreview({ markdown, previewOptions } : MDPreviewType) {
    return (
        <Markdown
            remarkPlugins={previewOptions?.remarkPlugins}
        >
            {markdown}
        </Markdown>
    );
}