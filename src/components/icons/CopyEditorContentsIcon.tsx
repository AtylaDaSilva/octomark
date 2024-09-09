// React
import { useState } from "react";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { CopyAll } from "@mui/icons-material";

// Types
import { TReference, } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function CopyEditorContentsIcon({ reference }: { reference: TReference }) {
    const defaultTooltip = "Copy Raw File";
    const [tooltip, setTooltip] = useState<string>(defaultTooltip)
    return (
        <Tooltip title={tooltip}>
            <IconButton
                aria-label="Copy Raw File"
                color="info"
                onClick={() => {
                    window.navigator.clipboard.writeText(reference.editorRef.current.getValue())
                    setTooltip("Copied!");

                    // Change tooltip to default value
                    setTimeout(() => {
                        setTooltip(defaultTooltip)
                    }, 3000)
                }}
            >
                <CopyAll sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}