// MUI Components
import { IconButton } from "@mui/material";
import { WrapText } from "@mui/icons-material";

// Commands
import { handleCommand, footnote } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

export default function FootnoteIcon(props : CommandBarProps) {
    return (
        <IconButton
            aria-label="Insert Task List"
            onClick={() => {
                handleCommand(
                    footnote,
                    {
                        selection: props.selection,
                        state: { value: props.footnoteCount, updater: props.setFootnoteCount }
                    },
                    props.setSelection,
                    props.markdown,
                    props.setMarkdown
                );
            }}
        >
            <WrapText />
        </IconButton>
    );
}