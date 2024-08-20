// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { CodeOff } from "@mui/icons-material";

// Commands
import { handleCommand, comment } from "@/commands";

// Types
import { TState, TReference } from "@/types";

export default function CommentIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Comment">
            <IconButton
                aria-label="Insert Comment"
                color="info"
                onClick={() => {
                    handleCommand(
                        comment,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <CodeOff />
            </IconButton>
        </Tooltip>
    );
}