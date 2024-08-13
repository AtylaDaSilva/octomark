"use client"
import { useState } from "react";

// MUI Components
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { Title } from "@mui/icons-material";

// Commands
import { handleCommand, heading } from "@/commands";

// Types
import { headingLevelType } from "@/commands/heading";
import { stateType } from "@/app/page";

export default function TitleIcon({ selection, setSelection, markdown, setMarkdown }: stateType) {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorElement);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElement(null);
    };
    const handleMenuItemClick = (headingLevel: headingLevelType) => {
        if (selection && setSelection && markdown && setMarkdown) {
            handleCommand(
                heading,
                { selection: selection, headingLevel: headingLevel },
                setSelection,
                markdown,
                setMarkdown
            );
        }
    }

    return (
        <>
            <Tooltip title="Title">
                <IconButton
                    aria-label="Format Title"
                    onClick={handleClick}
                    color="info"
                >
                    <Title />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorElement}
                open={isOpen}
                onClick={handleClose}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => handleMenuItemClick(1)}
                >
                    Level 1
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick(2)}
                >
                    Level 2
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick(3)}
                >
                    Level 3
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick(4)}
                >
                    Level 4
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick(5)}
                >
                    Level 5
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick(6)}
                >
                    Level 6
                </MenuItem>
            </Menu>
        </>
    );
}