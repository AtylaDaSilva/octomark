// MUI Components
import { IconButton } from "@mui/material";
import { Code } from "@mui/icons-material";

// Commands
import { handleCommand, code } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function CodeIcon(props : CommandBarProps) {
    return (
        <IconButton
            aria-label="Format Code"
            color="info"
            onClick={() => {
                handleCommand(
                    code,
                    { selection: props.selection },
                    props.setSelection,
                    props.markdown,
                    props.setMarkdown
                );
            }}
        >
            <Code />
        </IconButton>
    );
}