import { Box } from "@mui/material";
import FooterMessage from "./FooterMessage";
import AppVersion from "./AppVersion";
import ChangeLog from "./ChangeLog";
import { DEFAULT_EDITOR_FONT } from "@/utils/constants";

export default function Appfooter() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            fontSize=".9rem"
        >
            <Box>
                <FooterMessage />
            </Box>
            <Box
                width="175px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                position="absolute"
                right="0%"
                marginRight="15px"
                fontFamily={DEFAULT_EDITOR_FONT}
            >
                <AppVersion />
                <ChangeLog />
            </Box>
        </Box>
    );
}