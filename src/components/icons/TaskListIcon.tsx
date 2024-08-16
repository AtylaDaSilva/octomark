// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Checklist } from "@mui/icons-material";

// Commands
import { handleCommand, taskList } from "@/commands";

// Types
import { TState } from "@/app/page";

export default function TaskListIcon({ selection, setSelection, markdown, setMarkdown }: TState) {
    return (
        <Tooltip title="Task List">
            <IconButton
                aria-label="Insert Task List"
                color="info"
                onClick={() => {
                    if (selection && setSelection && markdown && setMarkdown) {
                        handleCommand(
                            taskList,
                            { selection: selection },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
                }}
            >
                <Checklist />
            </IconButton>
        </Tooltip>
    );
}