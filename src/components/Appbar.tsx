// Next Components
import Link from "next/link";

// MUI Components
import { Grid, Toolbar, AppBar, AppBarProps, Typography, styled } from "@mui/material";

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
                <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={1}>
                        <Typography
                            variant="h2"
                            fontSize="2rem"
                        >
                            <Link href="/" className="no-text-decor color-inherit">OctoMark</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={"auto"} marginX="auto">
                        {/* <CommandBar state={state} /> */}
                    </Grid>
                    <Grid item xs={1} display={"flex"} justifyContent={"flex-end"} >
                        <GitHubLink />
                        <LinkedInLink />
                    </Grid>
                </Grid>
            </Toolbar>
        </CustomAppBar>
    );
}