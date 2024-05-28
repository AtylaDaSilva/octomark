// MUI Components
import { IconButton } from "@mui/material";
import { FormatItalic } from "@mui/icons-material";

// Commands
import { handleCommand, italic } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function ItalicIcon(props : CommandBarProps) {
    return (
        <IconButton
            aria-label="Format Italic"
            color="info"
            onClick={() => {
                handleCommand(
                    italic,
                    { selection: props.selection },
                    props.setSelection,
                    props.markdown,
                    props.setMarkdown
                );
            }}
        >
            <FormatItalic />
        </IconButton>
    );
}