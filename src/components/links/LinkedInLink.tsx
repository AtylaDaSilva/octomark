// Next Components
import Link from "next/link";

// MUI Components
import { IconButton, Tooltip } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

// Constants
import { LINKEDIN_LINK } from "@/utils/constants";

export default function LinkedInLink() {
    return (
        <Link
            href={LINKEDIN_LINK}
            target="_blank"
            className="no-text-decor color-inherit"
        >
            <Tooltip title='LinkedIn'>
                <IconButton
                    aria-label="Link to the Developer's LinkedIn profile"
                    color="info"
                    disableRipple
                    tabIndex={-1}
                >
                    <LinkedIn fontSize="small" />
                </IconButton>
            </Tooltip>
        </Link>
    );
}