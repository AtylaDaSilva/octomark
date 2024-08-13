// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatBold } from "@mui/icons-material";

// Commands
import { handleCommand, bold } from "@/commands";

// Types
import { stateType } from "@/app/page";

export default function BoldIcon({ selection, setSelection, markdown, setMarkdown }: stateType) {
    return (
        <Tooltip title="Bold">
            <IconButton
                aria-label="Format Bold"
                color="info"
                onClick={() => {
                    if (selection && setSelection && markdown && setMarkdown) {
                        handleCommand(
                            bold,
                            { selection: selection },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
                }}
            >
                <FormatBold />
            </IconButton>
        </Tooltip>
    );
}