// MUI Components
import { Grid, Toolbar, AppBar, AppBarProps, styled } from "@mui/material";

// App Components
import Brand from "./Brand";
import { GitHubLink, LinkedInLink } from "./links";

// Styled Components
const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.grey[700]}`,
    backgroundColor: theme.palette.background.paper,
    padding: "0px",
}));

export default function Appbar() {

    return (
        <CustomAppBar position="static">
            <Toolbar>
                <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={1} marginRight="auto">
                        <Brand />
                    </Grid>
                    <Grid item xs={1} marginLeft="auto" display={"flex"} justifyContent={"flex-end"} >
                        <GitHubLink />
                        <LinkedInLink />
                    </Grid>
                </Grid>
            </Toolbar>
        </CustomAppBar>
    );
}