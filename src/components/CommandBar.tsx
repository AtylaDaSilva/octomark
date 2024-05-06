// MUI Components
import { AppBar, Toolbar, IconButton } from "@mui/material";

// Placeholders
import { FormatBold } from "@mui/icons-material";


// Commands
import { bold } from "@/commands";

export default function CommandBar() {
    return (
        <AppBar
            position="static"
            color="secondary"
        >
            <Toolbar>
                <ul className="no-list-style flex flex-row">
                    <li>
                        <IconButton aria-label="Undo Action" onClick={bold}>
                            <FormatBold />
                        </IconButton>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
}