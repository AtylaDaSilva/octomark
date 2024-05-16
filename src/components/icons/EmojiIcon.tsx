"use client"
import { useState } from "react";

// MUI Components
import { IconButton, Grid, Menu, Tabs, Tab } from "@mui/material";
import { SentimentSatisfiedAlt } from "@mui/icons-material";

// Commands
import { handleCommand, emoji } from "@/commands";

// Types
import { CommandBarProps } from "../CommandBar";

// Emoji list
import emojis from "@/utils/emojis.json";

export default function EmojiIcon(props: CommandBarProps) {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorElement);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };

    const handleMenuItemClick = (emojiCode: string) => {
        handleCommand(
            emoji,
            { selection: props.selection, emojiCode },
            props.setSelection,
            props.markdown,
            props.setMarkdown
        );
    }

    return (
        <>
            <IconButton
                aria-label="Format Title"
                onClick={handleClick}
            >
                <SentimentSatisfiedAlt />
            </IconButton>
            <Menu
                anchorEl={anchorElement}
                open={isOpen}
                onClose={handleClose}
            >
                <Grid
                    container
                    padding={1}
                >
                    {
                        emojis.map(emoji => {
                            return (
                                <Grid item key={emoji.code}>
                                    <IconButton
                                        size="small"
                                        color="primary"
                                        onClick={() => handleMenuItemClick(emoji.code)}
                                    >
                                        {emoji.ico}
                                    </IconButton>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Menu>
        </>
    );
}