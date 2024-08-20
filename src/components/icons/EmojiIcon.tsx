"use client"
import { useState } from "react";

// MUI Components
import { IconButton, Grid, Menu, Tabs, Tab, Tooltip } from "@mui/material";
import { SentimentSatisfiedAlt } from "@mui/icons-material";

// Commands
import { handleCommand, emoji } from "@/commands";

// Types
import { TState, TReference } from "@/types";

// Emoji list
import emojiList from "@/utils/emojis.json";

export default function EmojiIcon({ state, reference }: { state: TState, reference: TReference }) {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<number>(0);
    const isOpen = Boolean(anchorElement);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };

    const handleMenuItemClick = (emojiCode: string) => {
        handleCommand(
            emoji,
            reference.editorRef,
            state,
            { emojiCode },
        );
        handleClose();
        setActiveTab(0);
    }

    function EmojiPanel({ emojis, activeTab, tabIndex }: { emojis: any[], activeTab: number, tabIndex: number }) {
        const panel = emojis.map(emoji => {
            return (
                activeTab === tabIndex && (
                    <IconButton
                        key={emoji.code[0]}
                        hidden={activeTab !== tabIndex}
                        size="small"
                        color="primary"
                        onClick={() => handleMenuItemClick(emoji.code[0])}
                    >
                        {emoji.ico}
                    </IconButton>
                )
            );
        })

        return panel;
    }

    return (
        <>
            <Tooltip title="Emoji">
                <IconButton
                    aria-label="Insert Emoji"
                    color="info"
                    onClick={handleClick}
                >
                    <SentimentSatisfiedAlt />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorElement}
                open={isOpen}
                onClose={handleClose}
                //sx={{ overflow: "hidden", minWidth: "1550px", maxWidth: "1550px" }}
            >
                <Grid
                    container
                    padding={1}
                >
                    <Grid item xs={12}>
                        <Tabs
                            value={activeTab}
                            onChange={handleTabChange}
                            aria-label="Emoji Tabs"
                        >
                            {
                                emojiList.map((emoji) => {
                                    return <Tab key={emoji.categoryName} label={emoji.categoryIcon} />
                                })
                            }
                        </Tabs>
                    </Grid>
                    {
                        emojiList.map((emoji, index) => {
                            return <EmojiPanel key={index} emojis={emoji.emojis} activeTab={activeTab} tabIndex={index} />
                        })
                    }
                </Grid>
            </Menu>
        </>
    );
}