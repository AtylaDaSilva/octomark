// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { CodeOff } from "@mui/icons-material";

// Commands
import { handleCommand, comment } from "@/commands";

// Types
import { TState } from "@/app/page";

export default function CommentIcon({ selection, setSelection, markdown, setMarkdown }: TState) {
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