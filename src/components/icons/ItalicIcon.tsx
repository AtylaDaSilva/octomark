// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatItalic } from "@mui/icons-material";

// Commands
import { handleCommand, italic } from "@/commands";

// Types
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function ItalicIcon({ state, reference } : { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Italic">
            <IconButton
                aria-label="Format Italic"
                color="info"
                onClick={() => {
                    handleCommand(
                        italic,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <FormatItalic sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}