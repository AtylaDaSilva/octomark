// MUI Components
import { IconButton, Tooltip, Button, styled } from "@mui/material";
import { FileUpload } from "@mui/icons-material";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

// Types
import { TState } from "@/types";

// Utils
import { MD_LOCAL_STORAGE_KEY } from "@/utils/constants";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


export default function UploadFileIcon({ state }: { state: TState }) {
    const readFile = async (event: any) => {
        const reader = new FileReader();
            reader.onload = async (event) => {
                const text = event.target?.result;
                if (state.setMarkdown) {
                    state.setMarkdown(text as string);
                    localStorage.setItem(MD_LOCAL_STORAGE_KEY, text as string);
                }
            }
            reader.readAsText(event.target.files[0])

    }


    return (
        <Tooltip title="Upload File">
            <IconButton
                aria-label="Button | Upload File"
                color="info"
                component="label"
                tabIndex={-1}

            >
                <FileUpload sx={{ fontSize: DEFAULT_ICON_SIZE }} />
                <VisuallyHiddenInput
                    type="file"
                    accept=".md,.txt"
                    onChange={event => readFile(event)}
                    />
            </IconButton>
        </Tooltip>
    );
}