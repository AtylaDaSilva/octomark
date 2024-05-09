// MUI Components
import { IconButton } from "@mui/material";
import { FormatListBulleted } from "@mui/icons-material";

// Commands
import { handleCommand, bulletedList } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function BulletedListIcon(props : CommandBarProps) {
    return (
        <IconButton
            aria-label="Format Bold"
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
    );
}