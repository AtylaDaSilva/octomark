"use client"
import { useState } from "react";

// MUI Components
import { IconButton, Menu, MenuItem } from "@mui/material";
import { PriorityHigh } from "@mui/icons-material";

// Utility functions
import { capitalize } from "@/functions/capitalize";

// Commands
import { handleCommand, alert } from "@/commands";

// Types
import type { alertLevelType } from "@/commands/alert";
import { CommandBarProps } from "../CommandBar";

export default function AlertIcon(props: CommandBarProps) {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorElement);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElement(null);
    };
    const handleMenuItemClick = (alertLevel: alertLevelType) => {
        handleCommand(
            alert,
            { selection: props.selection, alertLevel },
            props.setSelection,
            props.markdown,
            props.setMarkdown
        );
    }
    const alertLevels: alertLevelType[] = ["note", "tip", "important", "warning", "caution"];

    return (
        <>
            <IconButton
                aria-label="Format Alert"
                onClick={handleClick}
            >
                <PriorityHigh />
            </IconButton>
            <Menu
                anchorEl={anchorElement}
                open={isOpen}
                onClick={handleClose}
                onClose={handleClose}
            >

                {
                    alertLevels.map((alertLevel: alertLevelType, index) => {
                        return (
                            <MenuItem
                                key={index}
                                onClick={() => handleMenuItemClick(alertLevel)}
                            >
                                {capitalize(alertLevel)}
                            </MenuItem>
                        );
                    })
                }
            </Menu>
        </>
    );
}