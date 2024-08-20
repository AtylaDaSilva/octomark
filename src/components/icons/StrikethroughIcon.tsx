// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { StrikethroughS } from "@mui/icons-material";

// Commands
import { handleCommand, strikethrough } from "@/commands";

// Types
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function StrikethroughIcon({ state, reference }: { state:TState, reference: TReference }) {
    return (
        <Tooltip title="Strikethrough">
            <IconButton
                aria-label="Format Strikethrough"
                color="info"
                onClick={() => {
                    handleCommand(
                        strikethrough,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <StrikethroughS sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}