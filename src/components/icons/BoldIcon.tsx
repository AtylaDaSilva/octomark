// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatBold } from "@mui/icons-material";

// Commands
import { handleCommand, bold } from "@/commands";

// Types
import { TReference, TState } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function BoldIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Bold">
            <IconButton
                aria-label="Button | Format selection as Bold"
                color="info"
                onClick={() => {
                    handleCommand(
                        bold,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <FormatBold sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}