// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { StrikethroughS } from "@mui/icons-material";

// Commands
import { handleCommand, strikethrough } from "@/commands";

// Types
import { stateType } from "@/app/page";

export default function StrikethroughIcon({ selection, setSelection, markdown, setMarkdown }: stateType) {
    return (
        <Tooltip title="Strikethrough">
            <IconButton
                aria-label="Format Strikethrough"
                color="info"
                onClick={() => {
                    if (selection && setSelection && markdown && setMarkdown) {
                        handleCommand(
                            strikethrough,
                            { selection: selection },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
                }}
            >
                <StrikethroughS />
            </IconButton>
        </Tooltip>
    );
}