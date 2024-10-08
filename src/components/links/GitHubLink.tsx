// Next Components
import Link from "next/link";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { GitHub } from "@mui/icons-material";

// Constants
import { REPO_LINK } from "../../utils/constants";

export default function GitHubLink() {
    return (
        <Link
            href={REPO_LINK}
            target="_blank"
            className="no-text-decor color-inherit"
        >
            <Tooltip title='GitHub Repository'>
                <IconButton
                    aria-label="Link to the Developer's GitHub repository"
                    color="info"
                    disableRipple
                    tabIndex={-1}
                >
                    <GitHub fontSize="small" />
                </IconButton>
            </Tooltip>
        </Link>
    );
}