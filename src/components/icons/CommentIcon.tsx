// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { CodeOff } from "@mui/icons-material";

// Commands
import { handleCommand, comment } from "@/commands";

// Types
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function CommentIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Comment">
            <IconButton
                aria-label="Button | Format selected text as a Comment"
                color="info"
                onClick={() => {
                    handleCommand(
                        comment,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <CodeOff sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}