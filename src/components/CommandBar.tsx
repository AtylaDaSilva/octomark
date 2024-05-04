// MUI Components
import { AppBar, Toolbar, IconButton } from "@mui/material";

// Placeholders
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CommandBar() {
    return (
        <AppBar
            position="static"
            color="secondary"
        >
            <Toolbar>
                <ul className="no-list-style flex flex-row">
                    <li>
                        <IconButton aria-label="Undo Action">
                            <UndoIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Redo Action">
                            <RedoIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
}