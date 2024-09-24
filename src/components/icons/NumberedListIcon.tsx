// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatListNumbered } from "@mui/icons-material";

// Commands
import { handleCommand, numberedList } from "@/commands";

// Types
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function NumberedListIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Numbered List">
            <IconButton
                aria-label="Button | Format selected text as a Numbered List"
                color="info"
                onClick={() => {
                    handleCommand(
                        numberedList,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <FormatListNumbered sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}