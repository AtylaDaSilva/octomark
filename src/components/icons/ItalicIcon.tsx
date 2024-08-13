// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatItalic } from "@mui/icons-material";

// Commands
import { handleCommand, italic } from "@/commands";

// Types
import { stateType } from "@/app/page";

export default function ItalicIcon({ selection, setSelection, markdown, setMarkdown }: stateType) {
    return (
        <Tooltip title="Italic">
            <IconButton
                aria-label="Format Italic"
                color="info"
                onClick={() => {
                    if (selection && setSelection && markdown && setMarkdown) {
                        handleCommand(
                            italic,
                            { selection: selection },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
                }}
            >
                <FormatItalic />
            </IconButton>
        </Tooltip>
    );
}