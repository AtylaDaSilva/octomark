// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Checklist } from "@mui/icons-material";

// Commands
import { handleCommand, taskList } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function TaskListIcon(props : CommandBarProps) {
    return (
        <Tooltip title="Task List">
            <IconButton
                aria-label="Insert Task List"
                color="info"
                onClick={() => {
                    handleCommand(
                        taskList,
                        { selection: props.selection },
                        props.setSelection,
                        props.markdown,
                        props.setMarkdown
                    );
                }}
            >
                <Checklist />
            </IconButton>
        </Tooltip>
    );
}