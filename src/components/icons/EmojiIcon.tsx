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
import emojiList from "@/utils/emojis.json";

export default function EmojiIcon(props: CommandBarProps) {
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
            { selection: props.selection, emojiCode },
            props.setSelection,
            props.markdown,
            props.setMarkdown
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
                sx={{ overflowY: "auto", minWidth: "1485px", maxWidth: "1485px" }}
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