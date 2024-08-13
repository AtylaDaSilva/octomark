// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { WrapText } from "@mui/icons-material";

// Commands
import { handleCommand, footnote } from "@/commands";

// Types
import { stateType } from "@/app/page";

export default function FootnoteIcon(
    { selection, setSelection, markdown, setMarkdown, footnoteCount, setFootnoteCount }: stateType
) {
    return (
        <Tooltip title="Footnote">
            <IconButton
                aria-label="Insert Footnote"
                color="info"
                onClick={() => {
                    if (selection && setSelection && markdown && setMarkdown && footnoteCount != undefined && setFootnoteCount) {
                        handleCommand(
                            footnote,
                            {
                                selection: selection,
                                state: { value: footnoteCount, updater: setFootnoteCount }
                            },
                            setSelection,
                            markdown,
                            setMarkdown
                        );
                    }
                }}
            >
                <WrapText />
            </IconButton>
        </Tooltip>
    );
}