// MUI Components
import { Container, Box } from "@mui/material";

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
    EmojiIcon,
    HideShowPreviewIcon
} from "./icons";

// Types;
import { stateType } from "@/app/page";

export default function CommandBar({ state }: CommandBarProps) {
    return (
        <Container maxWidth={false}>
            <ul className="no-list-style flex">
                <li>
                    <TitleIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <BoldIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <ItalicIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <StrikethroughIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <CodeIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <LinkIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <ImageIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                        imageAltText={state.imageAltText}
                        setImageAltText={state.setImageAltText}
                    />
                </li>
                <li>
                    <BulletedListIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <NumberedListIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <TaskListIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <FootnoteIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                        footnoteCount={state.footnoteCount}
                        setFootnoteCount={state.setFootnoteCount}
                    />
                </li>
                <li>
                    <CommentIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <AlertIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <TableIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <li>
                    <EmojiIcon
                        selection={state.selection}
                        setSelection={state.setSelection}
                        markdown={state.markdown}
                        setMarkdown={state.setMarkdown}
                    />
                </li>
                <Box marginLeft="auto">
                    <li>
                        <HideShowPreviewIcon
                            showPreview={state.showPreview}
                            setShowPreview={state.setShowPreview}
                        />
                    </li>
                </Box>
            </ul>
        </Container>
    );
}

// Component types
export type CommandBarProps = {
    state: stateType
}