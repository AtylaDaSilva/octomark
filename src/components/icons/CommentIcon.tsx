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
                    if (selection && setSelection && markdown && setMarkdown) {
                        handleCommand(
                            comment,
                            { selection: selection },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
                }}
            >
                <CodeOff />
            </IconButton>
        </Tooltip>
    );
}