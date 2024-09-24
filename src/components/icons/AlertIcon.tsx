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
import type { TAlertLevel } from "@/types";
import { TState, TReference } from "@/types";

// Constants
import { DEFAULT_ICON_SIZE } from "@/utils/constants";

export default function AlertIcon({ state, reference }: { state: TState, reference: TReference }) {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorElement);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElement(null);
    };
    const handleMenuItemClick = (alertLevel: TAlertLevel) => {
        handleCommand(
            alert,
            reference.editorRef,
            state,
            { alertLevel },
        );
    }
    const alertLevels: TAlertLevel[] = ["note", "tip", "important", "warning", "caution"];

    return (
        <>
            <Tooltip title="Alert">
                <IconButton
                    aria-label="Modal | Format selected text as a GitHub Alert"
                    color="info"
                    onClick={handleClick}
                >
                    <PriorityHigh sx={{ fontSize: DEFAULT_ICON_SIZE }} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorElement}
                open={isOpen}
                onClick={handleClose}
                onClose={handleClose}
            >

                {
                    alertLevels.map((alertLevel: TAlertLevel, index) => {
                        return (
                            <MenuItem
                                key={index}
                                onClick={() => handleMenuItemClick(alertLevel)}
                                aria-label={`Menu Item | Alert level '${alertLevel}'`}
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