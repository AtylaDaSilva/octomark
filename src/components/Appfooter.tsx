import Link from "next/link";
import { Box } from "@mui/material";
import { GITHUB_LINK } from "@/utils/constants";

export default function Appfooter() {
    const me = (
        <Link
            href={GITHUB_LINK}
            target="_blank"
            className="no-text-decor color-inherit"
            >
                AtylaDaSilva
            </Link>
    )
    return (
        <Box fontSize=".8rem" height="100%" display="flex" justifyContent="center" alignItems="center">
            <p>
                Made with <span>love</span> by { me }
            </p>
        </Box>
    );
}