// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatListNumbered } from "@mui/icons-material";

// Commands
import { handleCommand, numberedList } from "@/commands";

// Types
import { TState, TReference } from "@/types";

export default function NumberedListIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Numbered List">
            <IconButton
                aria-label="Insert Numbered List"
                color="info"
                onClick={() => {
                    handleCommand(
                        numberedList,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <FormatListNumbered />
            </IconButton>
        </Tooltip>
    );
}