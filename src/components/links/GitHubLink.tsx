// Next Components
import Link from "next/link";

// MUI Components
import { IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";

// Constants
import { REPO_LINK } from "../../utils/constants";

export default function GitHubLink() {
    return (
        <IconButton
            aria-label="GitHub"
            color="info"
        >
            <Link
                href={REPO_LINK}
                target="_blank"
                className="no-text-decor color-inherit"
            >
                <GitHub />
            </Link>
        </IconButton>
    );
}