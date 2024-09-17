import Link from "next/link";
import { Box } from "@mui/material";
import { GITHUB_LINK } from "@/utils/constants";

export default function Appfooter() {
    const me = (
        <Link
            href={GITHUB_LINK}
            target="_blank"
            className="text-link no-text-decor color-inherit"
            aria-label="Link to developer's GitHub repository"
            >
                AtylaDaSilva
            </Link>
    )
    return (
        <Box fontSize=".8rem" height="100%" display="flex" justifyContent="center" alignItems="center">
            <p id="footer-message" aria-label="Footer message">
                Made with <span></span> by { me }
            </p>
        </Box>
    );
}