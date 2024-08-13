// Next Components
import Link from "next/link";

// MUI Components
import { IconButton } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

export default function LinkedInLink() {
    return (
        <IconButton
            aria-label="LinkedIn"
            color="info"
        >
            <Link
                href="https://www.linkedin.com/in/atyla-mendes-da-silva-39a21018b/"
                target="_blank"
                className="no-text-decor color-inherit"
            >
                <LinkedIn />
            </Link>
        </IconButton>
    );
}