import { Typography } from "@mui/material";
import Link from "next/link";
import { GITHUB_LINK } from "@/utils/constants";

export default function FooterMessage() {
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
        <span
            id="footer-message"
            aria-label="Footer message"
        >
            Made with <span></span> by { me }
        </span>
    )
}