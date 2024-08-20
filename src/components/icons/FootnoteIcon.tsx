// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { WrapText } from "@mui/icons-material";

// Commands
import { handleCommand, footnote } from "@/commands";

// Types
import { TState, TReference } from "@/types";

export default function FootnoteIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Footnote">
            <IconButton
                aria-label="Insert Footnote"
                color="info"
                onClick={() => {
                    handleCommand(
                        footnote,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <WrapText />
            </IconButton>
        </Tooltip>
    );
}