// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { FileDownload } from "@mui/icons-material";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

// Types
import { TState } from "@/types";


export default function DownloadFileIcon({ state }: { state: TState }) {
    // Download URL buffer
    var mdFile: string | null = null;

    const makeTextFile = (text: string) => {
        const data = new Blob([text], { type: "text/markdown" })

        // Clear buffer
        if (mdFile !== null) {
            window.URL.revokeObjectURL(mdFile)
        }

        mdFile = window.URL.createObjectURL(data)

        return mdFile;
    }

    const downloadFile = () => {
        // Create anchor element
        var link = document.createElement('a');
        link.setAttribute('download', 'markdown.md');
        link.href = makeTextFile(state.markdown as string)
        document.body.appendChild(link)

        // wait for the link to be added to the document
        // and simulate a click event
        window.requestAnimationFrame(() => {
            let event = new MouseEvent('click');
            link.dispatchEvent(event);
            document.body.removeChild(link);
        });
    }


    return (
        <Tooltip title="Download File">
            <IconButton
                aria-label="Button | Download File"
                color="info"
                onClick={downloadFile}

            >
                <FileDownload sx={{ fontSize: DEFAULT_ICON_SIZE }} />
            </IconButton>
        </Tooltip>
    );
}