// MUI Components
import { Grid, Toolbar } from "@mui/material";

// App Components
import { MainAppbar } from "@/components/styled/MainAppbar"
import Brand from "./Brand";
import { GitHubLink, LinkedInLink } from "./links";

export default function Appbar() {

    return (
        <MainAppbar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs={1} marginRight="auto" display="flex" alignItems="center">
                        <Brand />
                    </Grid>
                    <Grid item xs={1} marginLeft="auto" display="flex" justifyContent={"center"} alignItems="center">
                        <GitHubLink />
                        <LinkedInLink />
                    </Grid>
                </Grid>
            </Toolbar>
        </MainAppbar>
    );
}