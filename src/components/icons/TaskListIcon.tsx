// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Checklist } from "@mui/icons-material";

// Commands
import { handleCommand, taskList } from "@/commands";

// Types
import { TState, TReference } from "@/types";

export default function TaskListIcon({ state, reference }: { state: TState, reference: TReference }) {
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