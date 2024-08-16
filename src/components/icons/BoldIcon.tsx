// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatBold } from "@mui/icons-material";

// Commands
import { handleCommand, bold } from "@/commands";

// Types
import { TReference, TState } from "@/types";

export default function BoldIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Bold">
            <IconButton
                aria-label="Format Bold"
                color="info"
                onClick={() => {
                    handleCommand(
                        bold,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <FormatBold />
            </IconButton>
        </Tooltip>
    );
}