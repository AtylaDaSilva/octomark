// MUI Components
import { AppBar, AppBarProps, Toolbar, styled } from "@mui/material";

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

const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.grey[700]}`,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center"
}))

export default function CommandBar({ state }: CommandBarProps) {
    return (
        <CustomAppBar
            position="static"
            color="secondary"
        >
            <Toolbar>
                <ul className="no-list-style flex flex-row">
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
                    <li>
                        <HideShowPreviewIcon
                            showPreview={state.showPreview}
                            setShowPreview={state.setShowPreview}
                        />
                    </li>
                </ul>
            </Toolbar>
        </CustomAppBar>
    );
}

// Component types
export type CommandBarProps = {
    state: stateType
}