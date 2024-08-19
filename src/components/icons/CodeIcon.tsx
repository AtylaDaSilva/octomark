// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Code } from "@mui/icons-material";

// Commands
import { handleCommand, code } from "@/commands";

// Types
import { TState, TReference } from "@/types";

export default function CodeIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Code">
            <IconButton
                aria-label="Format Code"
                color="info"
                onClick={() => {
                    handleCommand(
                        code,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <Code />
            </IconButton>
        </Tooltip>
    );
}