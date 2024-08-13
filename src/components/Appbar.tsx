// Next Components
import Link from "next/link";

// MUI Components
import { Toolbar, AppBar, AppBarProps, Typography, Container, Box, styled } from "@mui/material";

// App Components
import CommandBar from "@/components/CommandBar";
import { GitHubLink, LinkedInLink } from "./links";

// Types
import { stateType } from "@/app/page";

// Component types
export type AppbarType = {
    state: stateType
}

// Styled Components
const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.grey[700]}`,
    backgroundColor: theme.palette.background.paper,
    padding: "5px 0px",
}));

export default function Appbar({ state }: AppbarType) {

    return (
        <CustomAppBar position="static">
            <Toolbar>
                <Container
                    maxWidth={false}
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box position="absolute" left={0}>
                        <Typography
                            variant="h2"
                            fontSize="2rem"
                        >
                            <Link href="/" className="no-text-decor color-inherit">OctoMark</Link>
                        </Typography>
                    </Box>
                    <Box margin="0px auto">
                        <CommandBar
                            state={state}
                        />
                    </Box>
                    <Box>
                        <GitHubLink />
                        <LinkedInLink />
                    </Box>
                </Container>
            </Toolbar>
        </CustomAppBar>
    );
}