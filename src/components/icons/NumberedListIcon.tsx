// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatListNumbered } from "@mui/icons-material";

// Commands
import { handleCommand, numberedList } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function NumberedListIcon(props : CommandBarProps) {
    return (
        <Tooltip title="Numbered List">
            <IconButton
                aria-label="Insert Numbered List"
                color="info"
                onClick={() => {
                    handleCommand(
                        numberedList,
                        { selection: props.selection },
                        props.setSelection,
                        props.markdown,
                        props.setMarkdown
                    );
                }}
            >
                <FormatListNumbered />
            </IconButton>
        </Tooltip>
    );
}