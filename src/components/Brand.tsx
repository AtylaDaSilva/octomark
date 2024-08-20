// Next Components
import Link from "next/link";

// MUI Components
import { Typography } from "@mui/material";

export default function Brand() {
    return (
        <Typography
            variant="h1"
            fontSize="1.5rem"
        >
            <Link href="/" className="no-text-decor color-inherit">OctoMark</Link>
        </Typography>
    );
}