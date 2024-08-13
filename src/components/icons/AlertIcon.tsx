"use client"
import { useState } from "react";

// MUI Components
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { PriorityHigh } from "@mui/icons-material";

// Utility functions
import { capitalize } from "@/functions/capitalize";

// Commands
import { handleCommand, alert } from "@/commands";

// Types
import type { alertLevelType } from "@/commands/alert";
import { stateType } from "@/app/page";

export default function AlertIcon({ selection, setSelection, markdown, setMarkdown }: stateType) {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorElement);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElement(null);
    };
    const handleMenuItemClick = (alertLevel: alertLevelType) => {
        if (selection && setSelection && markdown && setMarkdown) {
            handleCommand(
                alert,
                { selection: selection, alertLevel },
                setSelection,
                markdown,
                setMarkdown
            );
        }
    }
    const alertLevels: alertLevelType[] = ["note", "tip", "important", "warning", "caution"];

    return (
        <>
            <Tooltip title="Alert">
                <IconButton
                    aria-label="Format Alert"
                    color="info"
                    onClick={handleClick}
                >
                    <PriorityHigh />
                </IconButton>
            </Tooltip>
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