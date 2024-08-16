// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FormatListNumbered } from "@mui/icons-material";

// Commands
import { handleCommand, numberedList } from "@/commands";

// Types
import { TState } from "@/app/page";

export default function NumberedListIcon({ selection, setSelection, markdown, setMarkdown }: TState) {
    return (
        <Tooltip title="Numbered List">
            <IconButton
                aria-label="Insert Numbered List"
                color="info"
                onClick={() => {
                    if (selection && setSelection && markdown && setMarkdown) {
                        handleCommand(
                            numberedList,
                            { selection: selection },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
                }}
            >
                <FormatListNumbered />
            </IconButton>
        </Tooltip>
    );
}