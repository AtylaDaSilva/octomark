// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { WrapText } from "@mui/icons-material";

// Commands
import { handleCommand, footnote } from "@/commands";

// Types
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function FootnoteIcon({ state, reference }: { state: TState, reference: TReference }) {
    return (
        <Tooltip title="Footnote">
            <IconButton
                aria-label="Button | Format selected text as a Footnote"
                color="info"
                onClick={() => {
                    handleCommand(
                        footnote,
                        reference.editorRef,
                        state
                    );
                }}
            >
                <WrapText sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}