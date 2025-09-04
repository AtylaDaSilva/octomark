"use client"
import { useState } from "react";

// MUI Components
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
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
    const maxHeadingSize = "2rem"

    return (
        <>
            <Tooltip title="Headings">
                <IconButton
                    aria-label="Button | Format selection as Heading"
                    onClick={handleClick}
                    color="primary"
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
                    <Typography variant="h1" fontSize={maxHeadingSize}>Heading 1</Typography>
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 2"
                    onClick={() => handleMenuItemClick(2)}
                >
                    <Typography variant="h2" fontSize={`calc(${maxHeadingSize} - 0.2rem)`}>Heading 2</Typography>
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 3"
                    onClick={() => handleMenuItemClick(3)}
                    // sx={{fontSize: "inherit"}}
                >
                    <Typography variant="h3" fontSize={`calc(${maxHeadingSize} - 0.4rem)`}>Heading 3</Typography>
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 4"
                    onClick={() => handleMenuItemClick(4)}
                    // sx={{fontSize: "inherit"}}
                >
                    <Typography variant="h4" fontSize={`calc(${maxHeadingSize} - 0.6rem)`}>Heading 4</Typography>
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 5"
                    onClick={() => handleMenuItemClick(5)}
                >
                    <Typography variant="h5" fontSize={`calc(${maxHeadingSize} - 0.8rem)`}>Heading 5</Typography>
                </MenuItem>
                <MenuItem
                    aria-label="Title Menu Option | Level 6"
                    onClick={() => handleMenuItemClick(6)}
                >
                    <Typography variant="h6" fontSize={`calc(${maxHeadingSize} - 1rem)`}>Heading 6</Typography>
                </MenuItem>
            </Menu>
        </>
    );
}