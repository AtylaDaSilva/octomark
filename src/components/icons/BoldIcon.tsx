// MUI Components
import { IconButton } from "@mui/material";
import { FormatBold } from "@mui/icons-material";

// Commands
import { handleCommand, bold } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function BoldIcon(props : CommandBarProps) {
    return (
        <IconButton
            aria-label="Format Bold"
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
    );
}