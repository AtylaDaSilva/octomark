// MUI Components
import { IconButton } from "@mui/material";
import { CodeOff } from "@mui/icons-material";

// Commands
import { handleCommand, comment } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function CommentIcon(props : CommandBarProps) {
    return (
        <IconButton
            aria-label="Insert Comment"
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
    );
}