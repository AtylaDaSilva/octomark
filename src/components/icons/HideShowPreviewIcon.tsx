// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Types
import { TState, } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE, SHOW_PREVIEW_LOCAL_STORAGE_KEY } from "@/utils/constants";

export default function HideShowPreviewIcon({ showPreview, setShowPreview }: TState) {
    const PreviewIcon = showPreview ? Visibility : VisibilityOff
    const label = `${showPreview ? 'Hide' : 'Show'} Preview Window`
    return (
        <Tooltip title={label}>
            <IconButton
                aria-label={`Button | ${label}`}
                color="info"
                onClick={() => {
                    if (setShowPreview) {
                        setShowPreview(currState => {
                            localStorage.setItem(SHOW_PREVIEW_LOCAL_STORAGE_KEY, JSON.stringify(!currState));
                            return !currState
                        });
                    }
                }}
            >
                <PreviewIcon sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}