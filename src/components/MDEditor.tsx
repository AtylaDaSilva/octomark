import { TextField } from "@mui/material";
import type { MDEditorType } from "@/utils/types";

export default function MDEditor(
    { markdown, handleChange, editorOptions } : MDEditorType
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
        />
    );
}