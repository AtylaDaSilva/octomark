import { Dispatch, SetStateAction } from "react";
import type { PluggableList } from "~/react-markdown/lib";

export type MDEditorType = {
    markdown: string,
    handleChange: Dispatch<SetStateAction<string>>,
    editorOptions?: MDEditorOptions
}

export type MDEditorOptions = {
    rows?: number,
    label?: string,
    autoFocus?: boolean,
    placeholder?: string,
    size?: "small" | "medium",
    variant?: 'filled' | 'outlined' | 'standard',
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
    height?: string,
    width?: string,
    fullWidth?: boolean
}

export type MDPreviewType = {
    markdown: string,
    previewOptions?: MDPreviewOptions
}

export type MDPreviewOptions = {
    remarkPlugins?: PluggableList | null
    height?: string,
    width?: string,
}