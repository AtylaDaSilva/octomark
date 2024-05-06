// React types
import { Dispatch, SetStateAction } from "react";

// MUI Components
import { TextField } from "@mui/material";

// Component types
export type MDEditorType = {
    markdown: string,
    handleChange: Dispatch<SetStateAction<string>>,
    handleTextareaMouseEvent: (event: React.SyntheticEvent) => void,
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

// Default export
export default function MDEditor(
    { markdown, handleChange, handleTextareaMouseEvent, editorOptions } : MDEditorType
) {

    return (
        <TextField
            multiline
            fullWidth={editorOptions?.fullWidth || false}
            autoFocus={editorOptions?.autoFocus || false}
            placeholder={editorOptions?.placeholder}
            rows={editorOptions?.rows || 10}
            label={editorOptions?.label}
            variant={editorOptions?.variant || "outlined"}
            color={editorOptions?.color || "primary"}
            value={markdown}
            onChange={(event) => handleChange(event.target.value)}
            onMouseUp={handleTextareaMouseEvent}
            onDoubleClick={handleTextareaMouseEvent}
        />
    );
}