// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { CodeOff } from "@mui/icons-material";

// Commands
import { handleCommand, comment } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function CommentIcon(props : CommandBarProps) {
    return (
        <Tooltip title="Comment">
            <IconButton
                aria-label="Insert Comment"
                color="info"
                onClick={() => {
                    handleCommand(
                        comment,
                        { selection: props.selection },
                        props.setSelection,
                        props.markdown,
                        props.setMarkdown
                    );
                }}
            >
                <CodeOff />
            </IconButton>
        </Tooltip>
    );
}