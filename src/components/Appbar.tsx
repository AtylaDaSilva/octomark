// MUI Components
import { Toolbar, AppBar, Typography, Button } from "@mui/material";

export default function Appbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h1">
                    Appbar
                </Typography>
            </Toolbar>
        </AppBar>
    );
}