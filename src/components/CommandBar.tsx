// MUI Components
import { AppBar, Toolbar } from "@mui/material";

// Command Icons
import {
    BoldIcon,
    ItalicIcon,
    TitleIcon,
    StrikethroughIcon,
    CodeIcon,
    LinkIcon,
    ImageIcon,
    BulletedListIcon,
    NumberedListIcon,
    TaskListIcon,
    FootnoteIcon,
    CommentIcon,
    AlertIcon,
    TableIcon,
    EmojiIcon
} from "./icons";

// Types
import { Dispatch, SetStateAction } from "react";
import type { selectedTextType } from "@/classes";

export default function CommandBar(props: CommandBarProps) {
    return (
        <AppBar
            position="static"
            color="secondary"
        >
            <Toolbar>
                <ul className="no-list-style flex flex-row">
                    <li>
                        <TitleIcon {...props} />
                    </li>
                    <li>
                        <BoldIcon {...props} />
                    </li>
                    <li>
                        <ItalicIcon {...props} />
                    </li>
                    <li>
                        <StrikethroughIcon {...props} />
                    </li>
                    <li>
                        <CodeIcon {...props} />
                    </li>
                    <li>
                        <LinkIcon {...props} />
                    </li>
                    <li>
                        <ImageIcon {...props} />
                    </li>
                    <li>
                        <BulletedListIcon {...props} />
                    </li>
                    <li>
                        <NumberedListIcon {...props} />
                    </li>
                    <li>
                        <TaskListIcon {...props} />
                    </li>
                    <li>
                        <FootnoteIcon {...props} />
                    </li>
                    <li>
                        <CommentIcon {...props} />
                    </li>
                    <li>
                        <AlertIcon {...props} />
                    </li>
                    <li>
                        <TableIcon {...props} />
                    </li>
                    <li>
                        <EmojiIcon {...props} />
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
}

// Component types
export type CommandBarProps = {
    selection: selectedTextType,
    setSelection: Dispatch<SetStateAction<selectedTextType>>,
    markdown: string,
    setMarkdown: Dispatch<SetStateAction<string>>,
    imageAltText: string,
    setImageAltText: Dispatch<SetStateAction<string>>,
    footnoteCount: number,
    setFootnoteCount: Dispatch<SetStateAction<number>>
}