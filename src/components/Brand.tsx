// Next Components
import Link from "next/link";

// MUI Components
import { Typography } from "@mui/material";

export default function Brand() {
    return (
        <Typography
            variant="h2"
            fontSize="2rem"
        >
            <Link href="/" className="no-text-decor color-inherit">OctoMark</Link>
        </Typography>
    );
}