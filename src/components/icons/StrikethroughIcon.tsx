// MUI Components
import { IconButton } from "@mui/material";
import { StrikethroughS } from "@mui/icons-material";

// Commands
import { handleCommand, strikethrough } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function StrikethroughIcon(props : CommandBarProps) {
    return (
        <IconButton
            aria-label="Format Strikethrough"
            color="info"
            onClick={() => {
                handleCommand(
                    strikethrough,
                    { selection: props.selection },
                    props.setSelection,
                    props.markdown,
                    props.setMarkdown
                );
            }}
        >
            <StrikethroughS />
        </IconButton>
    );
}