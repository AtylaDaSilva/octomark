// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatListBulleted } from "@mui/icons-material";

// Commands
import { handleCommand, bulletedList } from "@/commands";

// Types
import { TState, TReference } from "@/types";

export default function BulletedListIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Bulleted List">
            <IconButton
                aria-label="Insert Bulleted List"
                color="info"
                onClick={() => {
                    handleCommand(
                        bulletedList,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <FormatListBulleted />
            </IconButton>
        </Tooltip>
    );
}