// Next Components
import Link from "next/link";

// MUI Components
import { IconButton } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

// Constants
import { LINKEDIN_LINK } from "@/utils/constants";

export default function LinkedInLink() {
    return (
        <IconButton
            aria-label="LinkedIn"
            color="info"
        >
            <Link
                href={LINKEDIN_LINK}
                target="_blank"
                className="no-text-decor color-inherit"
            >
                <LinkedIn />
            </Link>
        </IconButton>
    );
}