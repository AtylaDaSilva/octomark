"use client"
import { useState } from "react";

// MUI Components
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { Title } from "@mui/icons-material";

// Commands
import { handleCommand, heading } from "@/commands";

// Types
import { TState, TReference, headingLevelType } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function TitleIcon({ state, reference }: { state: TState, reference: TReference }) {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorElement);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElement(null);
    };
    const handleMenuItemClick = (headingLevel: headingLevelType) => {
        handleCommand(
            heading,
            reference.editorRef,
            state,
            { headingLevel: headingLevel }
        );
    }

    return (
        <>
            <Tooltip title="Title">
                <IconButton
                    aria-label="Button | Format selection as Title"
                    onClick={handleClick}
                    color="info"
                >
                    <Title sx={{ fontSize: DEFAULT_ICON_SIZE }} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorElement}
                open={isOpen}
                aria-expanded={isOpen}
                onClick={handleClose}
                onClose={handleClose}
            >
                <MenuItem
                    aria-label="Title Menu Option | Level 1"
                    onClick={() => handleMenuItemClick(1)}
                >
                    Level 1
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 2"
                    onClick={() => handleMenuItemClick(2)}
                >
                    Level 2
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 3"
                    onClick={() => handleMenuItemClick(3)}
                >
                    Level 3
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 4"
                    onClick={() => handleMenuItemClick(4)}
                >
                    Level 4
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 5"
                    onClick={() => handleMenuItemClick(5)}
                >
                    Level 5
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 6"
                    onClick={() => handleMenuItemClick(6)}
                >
                    Level 6
                </MenuItem>
            </Menu>
        </>
    );
}