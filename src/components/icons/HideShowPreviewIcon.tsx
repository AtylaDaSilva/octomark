// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Types
import { TState, } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function HideShowPreviewIcon({ showPreview, setShowPreview }: TState) {
    const PreviewIcon = showPreview ? Visibility : VisibilityOff
    const label = `${showPreview ? 'Hide' : 'Show'} Preview`
    return (
        <Tooltip title={label}>
            <IconButton
                aria-label={label}
                color="info"
                onClick={() => {
                    if (setShowPreview) setShowPreview(currState => !currState)
                }}
            >
                <PreviewIcon sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}