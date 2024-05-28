// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Code } from "@mui/icons-material";

// Commands
import { handleCommand, code } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function CodeIcon(props : CommandBarProps) {
    return (
        <Tooltip title="Code">
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
        </Tooltip>
    );
}