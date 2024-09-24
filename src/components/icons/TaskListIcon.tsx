// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Checklist } from "@mui/icons-material";

// Commands
import { handleCommand, taskList } from "@/commands";

// Types
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function TaskListIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Task List">
            <IconButton
                aria-label="Button | Format selected text as a Task List"
                color="info"
                onClick={() => {
                    handleCommand(
                        taskList,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <Checklist sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}