// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatListBulleted } from "@mui/icons-material";

// Commands
import { handleCommand, bulletedList } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function BulletedListIcon(props : CommandBarProps) {
    return (
        <Tooltip title="Bulleted List">
            <IconButton
                aria-label="Insert Bulleted List"
                color="info"
                onClick={() => {
                    handleCommand(
                        bulletedList,
                        { selection: props.selection },
                        props.setSelection,
                        props.markdown,
                        props.setMarkdown
                    );
                }}
            >
                <FormatListBulleted />
            </IconButton>
        </Tooltip>
    );
}