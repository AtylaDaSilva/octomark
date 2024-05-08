// MUI Components
import { AppBar, Toolbar, IconButton } from "@mui/material";

// Placeholders
import { FormatBold } from "@mui/icons-material";

// Commands
import { handleCommand, bold } from "@/commands";

// Types
import { Dispatch, SetStateAction } from "react";
import type { selectedTextType } from "@/classes";

export default function CommandBar(
    {
        selection,
        setSelection,
        markdown,
        setMarkdown
    }
    :
    {
        selection: selectedTextType,
        setSelection: Dispatch<SetStateAction<selectedTextType>>,
        markdown : string,
        setMarkdown : Dispatch<SetStateAction<string>>
    }
) {
    return (
        <AppBar
            position="static"
            color="secondary"
        >
            <Toolbar>
                <ul className="no-list-style flex flex-row">
                    <li>
                        <IconButton
                            aria-label="Undo Action"
                            onClick={() => {
                                handleCommand(
                                    bold,
                                    selection,
                                    setSelection,
                                    markdown,
                                    setMarkdown
                                )
                            }}
                        >
                            <FormatBold />
                        </IconButton>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
}