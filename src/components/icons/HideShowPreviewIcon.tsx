// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Visibility, VisibilityOutlined } from "@mui/icons-material";

//React
import { useState } from "react";

// Types
import { TState, } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE, SHOW_PREVIEW_LOCAL_STORAGE_KEY } from "@/utils/constants";

export default function HideShowPreviewIcon({ showPreview, setShowPreview }: TState) {
    const PreviewIcon = showPreview ? Visibility : VisibilityOutlined
    const label = `${showPreview ? 'Hide' : 'Show'} Preview`
    const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)
    return (
        <Tooltip
            title={label}
            open={isTooltipOpen}
            onOpen={() => setIsTooltipOpen(true)}
            onClose={() => setIsTooltipOpen(false)}
        >
            <IconButton
                aria-label={`Button | ${label}`}
                color="info"
                onClick={() => {
                    if (setShowPreview) {
                        // Save preview state to local storage
                        setShowPreview(currState => {
                            localStorage.setItem(SHOW_PREVIEW_LOCAL_STORAGE_KEY, JSON.stringify(!currState));
                            return !currState
                        });
                        // Hide tooltip
                        setIsTooltipOpen(false);
                    }
                }}
            >
                <PreviewIcon sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}