// Next Components
import Link from "next/link";

// MUI Components
import { IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function GitHubLink() {
    return (
        <IconButton
            aria-label="GitHub"
            color="info"
        >
            <Link
                href="https://github.com/AtylaDaSilva/octomark"
                target="_blank"
                className="no-text-decor"
            >
                <GitHub />
            </Link>
        </IconButton>
    );
}