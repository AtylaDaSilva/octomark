// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatBold } from "@mui/icons-material";

// Commands
import { handleCommand, bold } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function BoldIcon(props : CommandBarProps) {
    return (
        <Tooltip title="Bold">
            <IconButton
                aria-label="Format Bold"
                color="info"
                onClick={() => {
                    handleCommand(
                        bold,
                        { selection: props.selection },
                        props.setSelection,
                        props.markdown,
                        props.setMarkdown
                    );
                }}
            >
                <FormatBold />
            </IconButton>
        </Tooltip>
    );
}