// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatListBulleted } from "@mui/icons-material";

// Commands
import { handleCommand, bulletedList } from "@/commands";

// Types
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function BulletedListIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Format selected text as a Bulleted List">
            <IconButton
                aria-label="Button | Format selected text as a Bulleted List"
                color="info"
                onClick={() => {
                    handleCommand(
                        bulletedList,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <FormatListBulleted sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}