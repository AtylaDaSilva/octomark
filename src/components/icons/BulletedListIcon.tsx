// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatListBulleted } from "@mui/icons-material";

// Commands
import { handleCommand, bulletedList } from "@/commands";

// Types
import { stateType } from "@/app/page";

export default function BulletedListIcon({ selection, setSelection, markdown, setMarkdown }: stateType) {
    return (
        <Tooltip title="Bulleted List">
            <IconButton
                aria-label="Insert Bulleted List"
                color="info"
                onClick={() => {
                    if (selection && setSelection && markdown && setMarkdown) {
                        handleCommand(
                            bulletedList,
                            { selection: selection },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
                }}
            >
                <FormatListBulleted />
            </IconButton>
        </Tooltip>
    );
}